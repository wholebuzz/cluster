[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / text

# Module: text

## Table of contents

### Interfaces

- [SimhashClusterTextOptions](../interfaces/text.simhashclustertextoptions.md)

### Functions

- [findOutliersByTFIDFCentrality](text.md#findoutliersbytfidfcentrality)
- [simhashClusterText](text.md#simhashclustertext)

## Functions

### findOutliersByTFIDFCentrality

▸ **findOutliersByTFIDFCentrality**<Item\>(`data`: *LexiconDataset*<Item\>, `centralityMeasure?`: [*ClusterCentralityMeasure*](../enums/outliers.clustercentralitymeasure.md), `removalMethod?`: [*FindOutliersMethod*](../enums/outliers.findoutliersmethod.md)): [*FoundOutliers*](../interfaces/outliers.foundoutliers.md)

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | *LexiconDataset*<Item\> |
| `centralityMeasure` | [*ClusterCentralityMeasure*](../enums/outliers.clustercentralitymeasure.md) |
| `removalMethod` | [*FindOutliersMethod*](../enums/outliers.findoutliersmethod.md) |

**Returns:** [*FoundOutliers*](../interfaces/outliers.foundoutliers.md)

Defined in: [text.ts:30](https://github.com/wholebuzz/cluster/blob/master/src/text.ts#L30)

___

### simhashClusterText

▸ **simhashClusterText**<Item\>(`data`: *FingerprintedLabeledLexiconDataset*<Item\>, `options?`: [*SimhashClusterTextOptions*](../interfaces/text.simhashclustertextoptions.md)<Item\>): [*ItemClustering*](cluster.md#itemclustering)

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | *FingerprintedLabeledLexiconDataset*<Item\> |
| `options?` | [*SimhashClusterTextOptions*](../interfaces/text.simhashclustertextoptions.md)<Item\> |

**Returns:** [*ItemClustering*](cluster.md#itemclustering)

Defined in: [text.ts:12](https://github.com/wholebuzz/cluster/blob/master/src/text.ts#L12)
