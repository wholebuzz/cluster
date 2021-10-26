# @wholebuzz/cluster

SimHash text clustering with OutRank outlier removal and Variation of Information analysis.

- [newLexicon()](https://github.com/wholebuzz/search/blob/master/docs/modules/lexicon.md#newlexicon) builds a [TFIDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) lexicon to weight [SimHash](https://en.wikipedia.org/wiki/SimHash) fingerprints.

- [simhashClusterText](docs/modules/text.md#simhashclustertext) performs `rounds` of [Beam Search](https://en.wikipedia.org/wiki/Beam_search) to find `fingerprint` neighborhoods by [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance). Neighbors are hierarchically clustered with [DBSCAN](https://en.wikipedia.org/wiki/DBSCAN).

- [findOutliersByTFIDFCentrality](docs/modules/text.md#findoutliersbytfidfcentrality) finds outliers using [OutRank](https://www.cse.msu.edu/~ptan/papers/IJAIT.pdf) as the [ClusterCentralityMeasure](https://github.com/wholebuzz/cluster/blob/master/docs/enums/outliers.clustercentralitymeasure.md). Outliers are removed by [Interquantile Range](https://en.wikipedia.org/wiki/Interquartile_range) or [Peirce's Criterion](https://en.wikipedia.org/wiki/Peirce%27s_criterion).

- [mapClusters](docs/modules/mapping.md#mapclusters) analyzes or carries forward previous clusters by [Variation of Information](https://en.wikipedia.org/wiki/Variation_of_information).

## References

- [[1](https://dash.harvard.edu/bitstream/handle/1/38811431/GHOCHE-SENIORTHESIS-2016.pdf)] Ghoche, 2016. Real-Time Tf-Idf Clustering Using Simhash, Approximate Nearest Neighbors, and DBSCAN
- [[2](https://www.cse.msu.edu/~ptan/papers/IJAIT.pdf)] Moonesinghe, Tan. 2008. OutRank: A GRAPH-BASED OUTLIER DETECTION FRAMEWORK USING RANDOM WALK
- [[3](https://en.wikipedia.org/wiki/DBSCAN)] Ester, Kriegel. 1996. Density-based spatial clustering of applications with noise

## Example

```typescript
import { clustersFromLabels } from '@wholebuzz/cluster/lib/cluster'
import { zero } from '@wholebuzz/cluster/lib/hamming'
import { LocalFileSystem } from '@wholebuzz/fs/lib/fs'
import { readLines } from '@wholebuzz/fs/lib/json'
import { simhashClusterText, findOutliersByTFIDFCentrality } from '@wholebuzz/cluster/lib/text'
import { newLexicon } from '@wholebuzz/search/lib/lexicon'
import { searchConfig } from '@wholebuzz/search/lib/search'
import { FingerprintedLabeledLexiconDataset } from '@wholebuzz/search/lib/types'

// https://www.kaggle.com/rmisra/news-category-dataset
interface Headline {
  authors: string
  date: string
  category: string
  link: string
  headline: string
  short_description: string
  fingerprint?: bigint
}
const items: Headline[] = await readLines<Headline>(
  new LocalFileSystem(),
  'News_Category_Dataset_v2.json.gz',
  (x) => JSON.parse(x)
)
const getItemText = (x: Headline) => x.headline
const getItemLabel = (x: Headline) => x.link

// Needs more data to build Lexicon.
// https://github.com/wholebuzz/search/blob/master/docs/modules/lexicon.md#readlexicon
const lexicon = newLexicon({ items, getItemText }, searchConfig)
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
  lexicon,
}

// Needs additional information like Headline.date for temporal filtering.
const clusters: Headline[][] = clustersFromLabels(
  dataset,
  simhashClusterText(dataset),
  dataset.setItemFingerprint
)
for (let i = 0; i < clusters.length; i++) {
  const outliers = findOutliersByTFIDFCentrality(
    { items: clusters[i], getItemText, lexicon: dataset.lexicon }
  )
  // Needs to filter items, sort cluster, filter clusters, etc on custom basis.
  const cluster = clusters[i] = clusters[i].filter((_, i) => !outliers.outliers[i])

  // Needs additional information like Headline.category for hierarchical clustering.
  // for (const c of parentCategories(cluster)) ((hc[c] ?? (hc[c] = [])).push(cluster)
}
// Needs final sorts and filters on custom basis.
console.log(clusters)
// Should combine previous clusters with mapClusters.
// https://github.com/wholebuzz/cluster/blob/master/docs/modules/mapping.md#mapclusters
```

## Table of contents

### Modules

- [cluster](docs/modules/cluster.md)
- [hamming](docs/modules/hamming.md)
- [mapping](docs/modules/mapping.md)
- [math](docs/modules/math.md)
- [outliers](docs/modules/outliers.md)
- [outrank](docs/modules/outrank.md)
- [text](docs/modules/text.md)
- [voi](docs/modules/voi.md)
