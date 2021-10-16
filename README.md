# @wholebuzz/cluster

SimHash text clustering with OutRank outlier removal and variation of information analysis.

## Example

```
import { clustersFromLabels } from '@wholebuzz/cluster/lib/cluster'
import { zero } from '@wholebuzz/cluster/lib/hamming'
import { LocalFileSystem } from '@wholebuzz/fs/lib/fs'
import { readLines } from '@wholebuzz/fs/lib/json'
import { simhashClusterText, findOutliersByTFIDFCentrality } from '@wholebuzz/cluster/lib/text'
import { newLexicon } from '@wholebuzz/search/lib/lexicon'
import { searchConfig } from '@wholebuzz/search/lib/search'
import { FingerprintedLabeledLexiconDataset } from '@wholebuzz/search/lib/types'

interface Headline {
  link: string
  headline: string
  fingerprint?: bigint
}
// https://www.kaggle.com/rmisra/news-category-dataset
const items: Headline[] = await readLines<Headline>(
  new LocalFileSystem(),
  'News_Category_Dataset_v2.json.gz',
  (x) => JSON.parse(x)
)
const getItemText = (x: Headline) => x.headline
const getItemLabel = (x: Headline) => x.link
const dataset: FingerprintedLabeledLexiconDataset<Headline> = {
  items,
  getItemText,
  getItemLabel,
  getItemFingerprint: (x) => x.fingerprint ?? zero,
  setItemFingerprint: (x, fp) => {
    if (fp === undefined) delete x.fingerprint
    else x.fingerprint = fp
    return x
  },
  lexicon: newLexicon({ items, getItemText }, searchConfig),
}

const clusters: Headline[][] = clustersFromLabels(dataset, simhashClusterText(dataset))
for (let i = 0; i < clusters.length; i++) {
  const outliers = findOutliersByTFIDFCentrality(
    { items: clusters[i], getItemText, lexicon: dataset.lexicon }
  )
  clusters[i] = clusters[i].filter((_, i) => !outliers.outliers[i])
}
console.log(clusters)
```

## Table of contents

### Modules

- [cluster](docs/modules/cluster.md)
- [hamming](docs/modules/hamming.md)
- [math](docs/modules/math.md)
- [outliers](docs/modules/outliers.md)
- [outrank](docs/modules/outrank.md)
- [text](docs/modules/text.md)
- [voi](docs/modules/voi.md)
