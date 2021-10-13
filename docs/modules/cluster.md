[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / cluster

# Module: cluster

## Table of contents

### Interfaces

- [LabeledDataset](../interfaces/cluster.labeleddataset.md)

### Type aliases

- [Cluster](cluster.md#cluster)
- [ClusterId](cluster.md#clusterid)
- [Clusters](cluster.md#clusters)
- [GetItemLabel](cluster.md#getitemlabel)
- [ItemClustering](cluster.md#itemclustering)
- [ItemGraph](cluster.md#itemgraph)
- [ItemLabel](cluster.md#itemlabel)

### Variables

- [intersect](cluster.md#intersect)
- [merge](cluster.md#merge)
- [overlaps](cluster.md#overlaps)

### Functions

- [dbclum](cluster.md#dbclum)
- [dbclumscan](cluster.md#dbclumscan)
- [dbscan](cluster.md#dbscan)
- [labelsFromClusters](cluster.md#labelsfromclusters)

## Type aliases

### Cluster

Ƭ **Cluster**<Item\>: Item[]

#### Type parameters

| Name |
| :------ |
| `Item` |

Defined in: cluster.ts:7

___

### ClusterId

Ƭ **ClusterId**: *number*

Defined in: cluster.ts:6

___

### Clusters

Ƭ **Clusters**<Item\>: [*Cluster*](cluster.md#cluster)<Item\>[]

#### Type parameters

| Name |
| :------ |
| `Item` |

Defined in: cluster.ts:8

___

### GetItemLabel

Ƭ **GetItemLabel**<Item\>: (`item`: Item) => [*ItemLabel*](cluster.md#itemlabel)

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Type declaration

▸ (`item`: Item): [*ItemLabel*](cluster.md#itemlabel)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | Item |

**Returns:** [*ItemLabel*](cluster.md#itemlabel)

Defined in: cluster.ts:11

___

### ItemClustering

Ƭ **ItemClustering**: *Record*<[*ItemLabel*](cluster.md#itemlabel), [*ClusterId*](cluster.md#clusterid)\>

Defined in: cluster.ts:9

___

### ItemGraph

Ƭ **ItemGraph**<Item\>: *Record*<[*ItemLabel*](cluster.md#itemlabel), Set<Item\>\>

#### Type parameters

| Name |
| :------ |
| `Item` |

Defined in: cluster.ts:10

___

### ItemLabel

Ƭ **ItemLabel**: *string*

Defined in: cluster.ts:5

## Variables

### intersect

• `Const` **intersect**: *any*

Defined in: cluster.ts:2

___

### merge

• `Const` **merge**: *any*

Defined in: cluster.ts:1

___

### overlaps

• `Const` **overlaps**: *any*

Defined in: cluster.ts:3

## Functions

### dbclum

▸ **dbclum**<Item\>(`graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: [*GetItemLabel*](cluster.md#getitemlabel)<Item\>, `shouldMerge`: (`C1`: Item[], `C2`: Item[], `graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: [*GetItemLabel*](cluster.md#getitemlabel)<Item\>) => ``true``, `mostBelongs`: (`P`: Item, `C1`: Item[], `C2`: Item[], `graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: [*GetItemLabel*](cluster.md#getitemlabel)<Item\>) => ``true``, `minPoints?`: *number*): [*ItemClustering*](cluster.md#itemclustering)

DBCLUM: Density-based Clustering
References: [[1](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.402.6999)]

**`optional`** minPoints Minimum number of points to form cluster.

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `graph` | [*ItemGraph*](cluster.md#itemgraph)<Item\> | - | Record mapping [[News]] [[`guid`]] to neighbors. |
| `getItemLabel` | [*GetItemLabel*](cluster.md#getitemlabel)<Item\> | - | - |
| `shouldMerge` | (`C1`: Item[], `C2`: Item[], `graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: [*GetItemLabel*](cluster.md#getitemlabel)<Item\>) => ``true`` | - | - |
| `mostBelongs` | (`P`: Item, `C1`: Item[], `C2`: Item[], `graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: [*GetItemLabel*](cluster.md#getitemlabel)<Item\>) => ``true`` | - | - |
| `minPoints` | *number* | 2 | - |

**Returns:** [*ItemClustering*](cluster.md#itemclustering)

label Record mapping [[News]] [[`guid]] to cluster label.

Defined in: cluster.ts:99

___

### dbclumscan

▸ **dbclumscan**<Item\>(`graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: [*GetItemLabel*](cluster.md#getitemlabel)<Item\>, `minPoints?`: *number*): [*ItemClustering*](cluster.md#itemclustering)

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `graph` | [*ItemGraph*](cluster.md#itemgraph)<Item\> | - |
| `getItemLabel` | [*GetItemLabel*](cluster.md#getitemlabel)<Item\> | - |
| `minPoints` | *number* | 2 |

**Returns:** [*ItemClustering*](cluster.md#itemclustering)

Defined in: cluster.ts:78

___

### dbscan

▸ **dbscan**<Item\>(`graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: [*GetItemLabel*](cluster.md#getitemlabel)<Item\>, `minPoints?`: *number*): [*ItemClustering*](cluster.md#itemclustering)

Density-based spatial clustering of applications with noise.
References: [[1](https://en.wikipedia.org/wiki/DBSCAN)]

**`optional`** minPoints Minimum number of points to form cluster.

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `graph` | [*ItemGraph*](cluster.md#itemgraph)<Item\> | - | Mapping of ItemLabel to nearest neighbor Items. |
| `getItemLabel` | [*GetItemLabel*](cluster.md#getitemlabel)<Item\> | - | - |
| `minPoints` | *number* | 2 | - |

**Returns:** [*ItemClustering*](cluster.md#itemclustering)

label Mapping of ItemLabel to ClusterId.

Defined in: cluster.ts:40

___

### labelsFromClusters

▸ **labelsFromClusters**<Item\>(`clusters`: [*Clusters*](cluster.md#clusters)<Item\>, `getItemLabel`: [*GetItemLabel*](cluster.md#getitemlabel)<Item\>): [*ItemClustering*](cluster.md#itemclustering)

Builds an ItemLabel to ClusterId map from existing Clusters.

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusters` | [*Clusters*](cluster.md#clusters)<Item\> |
| `getItemLabel` | [*GetItemLabel*](cluster.md#getitemlabel)<Item\> |

**Returns:** [*ItemClustering*](cluster.md#itemclustering)

Defined in: cluster.ts:22
