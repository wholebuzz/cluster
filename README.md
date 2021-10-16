# @wholebuzz/cluster

SimHash text clustering with OutRank outlier removal and variation of information analysis.

## Example

```
interface Event {
  guid: string
  title: string
  fingerprint?: bigint
}
const items: Event[] = []
const getItemText = (x) => x.title
const getItemLabel = (x) => x.guid
const dataset: FingerprintedLabeledTextDataset = {
  items,
  getItemText,
  getItemLabel,
  getItemFingerprint: (x) => x.fingerprint,
  setItemFingerprint: (x, fp) => {
    if (x === undefined) delete x.fingerprint
    else x.fingerprint = fp
    return x
  }
  idf: newLexicon({ items, getItemText }, searchConfig),
}
const clusters: Event[][] = clustersFromLabels(dataset, clusterText(dataset), setFingerprint)
for (let i = 0; i < clusters.length; i++) {
  const outliers = findOutliersByTFIDFCentrality(
    { items: clusters[i], getItemText, idf: dataset.idf }
  )
  clusters[i] = clusters[i].filter((_, i) => !outliers.outliers[i])
}
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
