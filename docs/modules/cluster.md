[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / cluster

# Module: cluster

## Table of contents

### Type aliases

- [Cluster](cluster.md#cluster)
- [ClusterId](cluster.md#clusterid)
- [Clusters](cluster.md#clusters)
- [ItemClustering](cluster.md#itemclustering)
- [ItemGraph](cluster.md#itemgraph)

### Variables

- [intersect](cluster.md#intersect)
- [merge](cluster.md#merge)
- [overlaps](cluster.md#overlaps)

### Functions

- [clustersFromLabels](cluster.md#clustersfromlabels)
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

Defined in: [cluster.ts:8](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L8)

___

### ClusterId

Ƭ **ClusterId**: *number*

Defined in: [cluster.ts:7](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L7)

___

### Clusters

Ƭ **Clusters**<Item\>: [*Cluster*](cluster.md#cluster)<Item\>[]

#### Type parameters

| Name |
| :------ |
| `Item` |

Defined in: [cluster.ts:9](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L9)

___

### ItemClustering

Ƭ **ItemClustering**: *Record*<ItemLabel, [*ClusterId*](cluster.md#clusterid)\>

Defined in: [cluster.ts:10](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L10)

___

### ItemGraph

Ƭ **ItemGraph**<Item\>: *Record*<ItemLabel, Set<Item\>\>

#### Type parameters

| Name |
| :------ |
| `Item` |

Defined in: [cluster.ts:11](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L11)

## Variables

### intersect

• `Const` **intersect**: *any*

Defined in: [cluster.ts:4](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L4)

___

### merge

• `Const` **merge**: *any*

Defined in: [cluster.ts:3](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L3)

___

### overlaps

• `Const` **overlaps**: *any*

Defined in: [cluster.ts:5](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L5)

## Functions

### clustersFromLabels

▸ **clustersFromLabels**<Item\>(`data`: *LabeledDataset*<Item\>, `clustering`: [*ItemClustering*](cluster.md#itemclustering), `itemFilter?`: (`item`: Item) => Item \| ``null``): [*Clusters*](cluster.md#clusters)<Item\>

Splits [LabeledDataset] items into [Clusters] according to clustering.

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | *LabeledDataset*<Item\> |
| `clustering` | [*ItemClustering*](cluster.md#itemclustering) |
| `itemFilter?` | (`item`: Item) => Item \| ``null`` |

**Returns:** [*Clusters*](cluster.md#clusters)<Item\>

Defined in: [cluster.ts:16](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L16)

___

### dbclum

▸ **dbclum**<Item\>(`graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>, `shouldMerge`: (`C1`: Item[], `C2`: Item[], `graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>) => ``true``, `mostBelongs`: (`P`: Item, `C1`: Item[], `C2`: Item[], `graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>) => ``true``, `minPoints?`: *number*): [*ItemClustering*](cluster.md#itemclustering)

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
| `getItemLabel` | *GetItemLabel*<Item\> | - | - |
| `shouldMerge` | (`C1`: Item[], `C2`: Item[], `graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>) => ``true`` | - | - |
| `mostBelongs` | (`P`: Item, `C1`: Item[], `C2`: Item[], `graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>) => ``true`` | - | - |
| `minPoints` | *number* | 2 | - |

**Returns:** [*ItemClustering*](cluster.md#itemclustering)

label Record mapping [[News]] [[`guid]] to cluster label.

Defined in: [cluster.ts:113](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L113)

___

### dbclumscan

▸ **dbclumscan**<Item\>(`graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>, `minPoints?`: *number*): [*ItemClustering*](cluster.md#itemclustering)

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `graph` | [*ItemGraph*](cluster.md#itemgraph)<Item\> | - |
| `getItemLabel` | *GetItemLabel*<Item\> | - |
| `minPoints` | *number* | 2 |

**Returns:** [*ItemClustering*](cluster.md#itemclustering)

Defined in: [cluster.ts:92](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L92)

___

### dbscan

▸ **dbscan**<Item\>(`graph`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>, `minPoints?`: *number*): [*ItemClustering*](cluster.md#itemclustering)

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
| `getItemLabel` | *GetItemLabel*<Item\> | - | - |
| `minPoints` | *number* | 2 | - |

**Returns:** [*ItemClustering*](cluster.md#itemclustering)

label Mapping of ItemLabel to ClusterId.

Defined in: [cluster.ts:54](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L54)

___

### labelsFromClusters

▸ **labelsFromClusters**<Item\>(`clusters`: [*Clusters*](cluster.md#clusters)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>): [*ItemClustering*](cluster.md#itemclustering)

Builds an ItemLabel to ClusterId map from existing Clusters.

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusters` | [*Clusters*](cluster.md#clusters)<Item\> |
| `getItemLabel` | *GetItemLabel*<Item\> |

**Returns:** [*ItemClustering*](cluster.md#itemclustering)

Defined in: [cluster.ts:36](https://github.com/wholebuzz/cluster/blob/master/src/cluster.ts#L36)
