[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / [hamming](../modules/hamming.md) / ClusterByHammingDistanceOptions

# Interface: ClusterByHammingDistanceOptions<Item\>

[hamming](../modules/hamming.md).ClusterByHammingDistanceOptions

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- **ClusterByHammingDistanceOptions**

  ↳ [*SimhashClusterTextOptions*](text.simhashclustertextoptions.md)

## Table of contents

### Properties

- [beamWidth](hamming.clusterbyhammingdistanceoptions.md#beamwidth)
- [clusterFn](hamming.clusterbyhammingdistanceoptions.md#clusterfn)
- [fingerprintBits](hamming.clusterbyhammingdistanceoptions.md#fingerprintbits)
- [nearnessThreshold](hamming.clusterbyhammingdistanceoptions.md#nearnessthreshold)
- [rehash](hamming.clusterbyhammingdistanceoptions.md#rehash)
- [rehasherFn](hamming.clusterbyhammingdistanceoptions.md#rehasherfn)
- [rounds](hamming.clusterbyhammingdistanceoptions.md#rounds)

## Properties

### beamWidth

• `Optional` **beamWidth**: *number*

Defined in: [hamming.ts:11](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L11)

___

### clusterFn

• `Optional` **clusterFn**: (`graph`: [*ItemGraph*](../modules/cluster.md#itemgraph)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>) => [*ItemClustering*](../modules/cluster.md#itemclustering)

#### Type declaration

▸ (`graph`: [*ItemGraph*](../modules/cluster.md#itemgraph)<Item\>, `getItemLabel`: *GetItemLabel*<Item\>): [*ItemClustering*](../modules/cluster.md#itemclustering)

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | [*ItemGraph*](../modules/cluster.md#itemgraph)<Item\> |
| `getItemLabel` | *GetItemLabel*<Item\> |

**Returns:** [*ItemClustering*](../modules/cluster.md#itemclustering)

Defined in: [hamming.ts:17](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L17)

___

### fingerprintBits

• `Optional` **fingerprintBits**: *number*

Defined in: [hamming.ts:12](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L12)

___

### nearnessThreshold

• `Optional` **nearnessThreshold**: *number*

Defined in: [hamming.ts:13](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L13)

___

### rehash

• `Optional` **rehash**: HashFunction[]

Defined in: [hamming.ts:15](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L15)

___

### rehasherFn

• `Optional` **rehasherFn**: (`x`: Item, `hash`: HashFunction) => *bigint*

#### Type declaration

▸ (`x`: Item, `hash`: HashFunction): *bigint*

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | Item |
| `hash` | HashFunction |

**Returns:** *bigint*

Defined in: [hamming.ts:16](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L16)

___

### rounds

• `Optional` **rounds**: *number*

Defined in: [hamming.ts:14](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L14)
