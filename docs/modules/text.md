[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / text

# Module: text

## Table of contents

### Interfaces

- [LabeledTextDataset](../interfaces/text.labeledtextdataset.md)
- [TextDataset](../interfaces/text.textdataset.md)

### Functions

- [filterOutliersByTFIDFCentrality](text.md#filteroutliersbytfidfcentrality)
- [simhashClusterText](text.md#simhashclustertext)
- [simhashWithIDFMap](text.md#simhashwithidfmap)

## Functions

### filterOutliersByTFIDFCentrality

▸ **filterOutliersByTFIDFCentrality**<Item\>(`data`: [*TextDataset*](../interfaces/text.textdataset.md)<Item\>, `centralityMeasure`: [*OutRank*](../enums/outliers.clustercentralitymeasure.md#outrank), `removalMethod?`: [*FindOutliersMethod*](../enums/outliers.findoutliersmethod.md)): [*FoundOutliers*](../interfaces/outliers.foundoutliers.md)

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [*TextDataset*](../interfaces/text.textdataset.md)<Item\> |
| `centralityMeasure` | [*OutRank*](../enums/outliers.clustercentralitymeasure.md#outrank) |
| `removalMethod` | [*FindOutliersMethod*](../enums/outliers.findoutliersmethod.md) |

**Returns:** [*FoundOutliers*](../interfaces/outliers.foundoutliers.md)

Defined in: text.ts:45

___

### simhashClusterText

▸ **simhashClusterText**<Item\>(`data`: [*LabeledTextDataset*](../interfaces/text.labeledtextdataset.md)<Item\>, `options?`: [*ClusterByHammingDistanceOptions*](../interfaces/hamming.clusterbyhammingdistanceoptions.md)<Item\>): *Promise*<[*ItemClustering*](cluster.md#itemclustering)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Item` | HasFingerprint |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [*LabeledTextDataset*](../interfaces/text.labeledtextdataset.md)<Item\> |
| `options?` | [*ClusterByHammingDistanceOptions*](../interfaces/hamming.clusterbyhammingdistanceoptions.md)<Item\> |

**Returns:** *Promise*<[*ItemClustering*](cluster.md#itemclustering)\>

Defined in: text.ts:35

___

### simhashWithIDFMap

▸ **simhashWithIDFMap**<Item\>(`data`: [*TextDataset*](../interfaces/text.textdataset.md)<Item\>, `fingerprintBits?`: *number*, `filter?`: (`x`: Item) => *boolean*, `useTokenId?`: *boolean*): *Promise*<Item & HasFingerprint[]\>

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [*TextDataset*](../interfaces/text.textdataset.md)<Item\> | - |
| `fingerprintBits` | *number* | 64 |
| `filter?` | (`x`: Item) => *boolean* | - |
| `useTokenId` | *boolean* | true |

**Returns:** *Promise*<Item & HasFingerprint[]\>

Defined in: text.ts:16
