[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / [text](../modules/text.md) / SimhashClusterTextOptions

# Interface: SimhashClusterTextOptions<Item\>

[text](../modules/text.md).SimhashClusterTextOptions

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*ClusterByHammingDistanceOptions*](hamming.clusterbyhammingdistanceoptions.md)<Item\>

  ↳ **SimhashClusterTextOptions**

## Table of contents

### Properties

- [beamWidth](text.simhashclustertextoptions.md#beamwidth)
- [clusterFn](text.simhashclustertextoptions.md#clusterfn)
- [fingerprintBits](text.simhashclustertextoptions.md#fingerprintbits)
- [nearnessThreshold](text.simhashclustertextoptions.md#nearnessthreshold)
- [rehash](text.simhashclustertextoptions.md#rehash)
- [rehasherFn](text.simhashclustertextoptions.md#rehasherfn)
- [rounds](text.simhashclustertextoptions.md#rounds)
- [useExistingFingerprint](text.simhashclustertextoptions.md#useexistingfingerprint)

## Properties

### beamWidth

• `Optional` **beamWidth**: *number*

Inherited from: [ClusterByHammingDistanceOptions](hamming.clusterbyhammingdistanceoptions.md).[beamWidth](hamming.clusterbyhammingdistanceoptions.md#beamwidth)

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

Inherited from: [ClusterByHammingDistanceOptions](hamming.clusterbyhammingdistanceoptions.md).[clusterFn](hamming.clusterbyhammingdistanceoptions.md#clusterfn)

Defined in: [hamming.ts:17](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L17)

___

### fingerprintBits

• `Optional` **fingerprintBits**: *number*

Inherited from: [ClusterByHammingDistanceOptions](hamming.clusterbyhammingdistanceoptions.md).[fingerprintBits](hamming.clusterbyhammingdistanceoptions.md#fingerprintbits)

Defined in: [hamming.ts:12](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L12)

___

### nearnessThreshold

• `Optional` **nearnessThreshold**: *number*

Inherited from: [ClusterByHammingDistanceOptions](hamming.clusterbyhammingdistanceoptions.md).[nearnessThreshold](hamming.clusterbyhammingdistanceoptions.md#nearnessthreshold)

Defined in: [hamming.ts:13](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L13)

___

### rehash

• `Optional` **rehash**: HashFunction[]

Inherited from: [ClusterByHammingDistanceOptions](hamming.clusterbyhammingdistanceoptions.md).[rehash](hamming.clusterbyhammingdistanceoptions.md#rehash)

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

Inherited from: [ClusterByHammingDistanceOptions](hamming.clusterbyhammingdistanceoptions.md).[rehasherFn](hamming.clusterbyhammingdistanceoptions.md#rehasherfn)

Defined in: [hamming.ts:16](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L16)

___

### rounds

• `Optional` **rounds**: *number*

Inherited from: [ClusterByHammingDistanceOptions](hamming.clusterbyhammingdistanceoptions.md).[rounds](hamming.clusterbyhammingdistanceoptions.md#rounds)

Defined in: [hamming.ts:14](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L14)

___

### useExistingFingerprint

• `Optional` **useExistingFingerprint**: *boolean*

Defined in: [text.ts:9](https://github.com/wholebuzz/cluster/blob/master/src/text.ts#L9)
