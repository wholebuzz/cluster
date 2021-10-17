[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / mapping

# Module: mapping

## Table of contents

### Functions

- [mapClusters](mapping.md#mapclusters)

## Functions

### mapClusters

▸ **mapClusters**<Item\>(`to`: [*Clusters*](cluster.md#clusters)<Item\>, `from`: [*Clusters*](cluster.md#clusters)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>, `mapFn?`: (`obj`: *Record*<string, number\>) => *string*): *object*

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [*Clusters*](cluster.md#clusters)<Item\> |
| `from` | [*Clusters*](cluster.md#clusters)<Item\> |
| `getItemLabel` | *GetItemLabel*<Item\> |
| `mapFn` | (`obj`: *Record*<string, number\>) => *string* |

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `labels0` | [*ItemClustering*](cluster.md#itemclustering) |
| `labels1` | [*ItemClustering*](cluster.md#itemclustering) |
| `mapping` | ({ `I`: *number* ; `toIndex`: *number*  } \| { `I`: *undefined* ; `toIndex`: *number* = -1 })[] |
| `voi` | *object* |
| `voi.H0` | *number* |
| `voi.H1` | *number* |
| `voi.I` | *number* |
| `voi.N` | *number* |
| `voi.mergedKeys` | *string*[] |
| `voi.pj` | [*ItemClustering*](cluster.md#itemclustering) |
| `voi.pjk` | *Record*<string, [*ItemClustering*](cluster.md#itemclustering)\> |
| `voi.pk` | [*ItemClustering*](cluster.md#itemclustering) |
| `voi.precision` | *number* |
| `voi.predKeys` | *string*[] |
| `voi.recall` | *number* |
| `voi.truthKeys` | *string*[] |
| `voi.value` | *number* |

Defined in: [mapping.ts:6](https://github.com/wholebuzz/cluster/blob/master/src/mapping.ts#L6)
