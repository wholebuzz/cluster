[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / voi

# Module: voi

## Table of contents

### Functions

- [variationOfInformation](voi.md#variationofinformation)
- [variationOfInformationFromLabels](voi.md#variationofinformationfromlabels)

## Functions

### variationOfInformation

▸ **variationOfInformation**<Item\>(`truth`: Item[], `pred`: Item[], `getItemLabel`: [*GetItemLabel*](cluster.md#getitemlabel)<Item\>, `ignoreUnlabeled?`: *boolean*): *object*

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `truth` | Item[] | - |
| `pred` | Item[] | - |
| `getItemLabel` | [*GetItemLabel*](cluster.md#getitemlabel)<Item\> | - |
| `ignoreUnlabeled` | *boolean* | false |

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `H0` | *number* |
| `H1` | *number* |
| `I` | *number* |
| `N` | *number* |
| `pj` | [*ItemClustering*](cluster.md#itemclustering) |
| `pjk` | *Record*<string, [*ItemClustering*](cluster.md#itemclustering)\> |
| `pk` | [*ItemClustering*](cluster.md#itemclustering) |
| `precision` | *number* |
| `recall` | *number* |
| `value` | *number* |

Defined in: voi.ts:5

___

### variationOfInformationFromLabels

▸ **variationOfInformationFromLabels**(`truth`: [*ItemClustering*](cluster.md#itemclustering), `pred`: [*ItemClustering*](cluster.md#itemclustering), `ignoreUnlabeled?`: *boolean*): *object*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `truth` | [*ItemClustering*](cluster.md#itemclustering) | - |
| `pred` | [*ItemClustering*](cluster.md#itemclustering) | - |
| `ignoreUnlabeled` | *boolean* | false |

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `H0` | *number* |
| `H1` | *number* |
| `I` | *number* |
| `N` | *number* |
| `mergedKeys` | *string*[] |
| `pj` | [*ItemClustering*](cluster.md#itemclustering) |
| `pjk` | *Record*<string, [*ItemClustering*](cluster.md#itemclustering)\> |
| `pk` | [*ItemClustering*](cluster.md#itemclustering) |
| `precision` | *number* |
| `predKeys` | *string*[] |
| `recall` | *number* |
| `truthKeys` | *string*[] |
| `value` | *number* |

Defined in: voi.ts:65
