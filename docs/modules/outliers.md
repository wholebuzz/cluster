[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / outliers

# Module: outliers

## Table of contents

### Enumerations

- [ClusterCentralityMeasure](../enums/outliers.clustercentralitymeasure.md)
- [FindOutliersMethod](../enums/outliers.findoutliersmethod.md)

### Interfaces

- [FindOutliersOptions](../interfaces/outliers.findoutliersoptions.md)
- [FoundCentrality](../interfaces/outliers.foundcentrality.md)
- [FoundOutliers](../interfaces/outliers.foundoutliers.md)

### Functions

- [findCentrality](outliers.md#findcentrality)
- [findOutliers](outliers.md#findoutliers)
- [findOutliersFromCentrality](outliers.md#findoutliersfromcentrality)

## Functions

### findCentrality

▸ **findCentrality**(`embedding`: *number*[][] \| *Record*<string, number\>[], `centralityMeasure?`: [*ClusterCentralityMeasure*](../enums/outliers.clustercentralitymeasure.md)): [*FoundCentrality*](../interfaces/outliers.foundcentrality.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `embedding` | *number*[][] \| *Record*<string, number\>[] |
| `centralityMeasure` | [*ClusterCentralityMeasure*](../enums/outliers.clustercentralitymeasure.md) |

**Returns:** [*FoundCentrality*](../interfaces/outliers.foundcentrality.md)

Defined in: outliers.ts:47

___

### findOutliers

▸ **findOutliers**(`embedding`: *number*[][] \| *Record*<string, number\>[], `centralityMeasure?`: [*ClusterCentralityMeasure*](../enums/outliers.clustercentralitymeasure.md), `removal?`: [*FindOutliersMethod*](../enums/outliers.findoutliersmethod.md)): [*FoundOutliers*](../interfaces/outliers.foundoutliers.md)

Finds outliers by cosine similarity with embedding vector mean or OutRank.

#### Parameters

| Name | Type |
| :------ | :------ |
| `embedding` | *number*[][] \| *Record*<string, number\>[] |
| `centralityMeasure` | [*ClusterCentralityMeasure*](../enums/outliers.clustercentralitymeasure.md) |
| `removal` | [*FindOutliersMethod*](../enums/outliers.findoutliersmethod.md) |

**Returns:** [*FoundOutliers*](../interfaces/outliers.foundoutliers.md)

Defined in: outliers.ts:37

___

### findOutliersFromCentrality

▸ **findOutliersFromCentrality**(`centrality`: *number*[], `removal?`: [*FindOutliersMethod*](../enums/outliers.findoutliersmethod.md), `options?`: [*FindOutliersOptions*](../interfaces/outliers.findoutliersoptions.md)): *boolean*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `centrality` | *number*[] |
| `removal` | [*FindOutliersMethod*](../enums/outliers.findoutliersmethod.md) |
| `options?` | [*FindOutliersOptions*](../interfaces/outliers.findoutliersoptions.md) |

**Returns:** *boolean*[]

Defined in: outliers.ts:71
