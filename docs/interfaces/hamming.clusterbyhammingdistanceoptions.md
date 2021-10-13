[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / [hamming](../modules/hamming.md) / ClusterByHammingDistanceOptions

# Interface: ClusterByHammingDistanceOptions<Item\>

[hamming](../modules/hamming.md).ClusterByHammingDistanceOptions

## Type parameters

| Name |
| :------ |
| `Item` |

## Table of contents

### Properties

- [beamWidth](hamming.clusterbyhammingdistanceoptions.md#beamwidth)
- [clusterFn](hamming.clusterbyhammingdistanceoptions.md#clusterfn)
- [fingerprintBits](hamming.clusterbyhammingdistanceoptions.md#fingerprintbits)
- [nearnessThreshhold](hamming.clusterbyhammingdistanceoptions.md#nearnessthreshhold)
- [rehash](hamming.clusterbyhammingdistanceoptions.md#rehash)
- [rehasherFn](hamming.clusterbyhammingdistanceoptions.md#rehasherfn)
- [rounds](hamming.clusterbyhammingdistanceoptions.md#rounds)

## Properties

### beamWidth

• `Optional` **beamWidth**: *number*

Defined in: hamming.ts:11

___

### clusterFn

• `Optional` **clusterFn**: (`graph`: [*ItemGraph*](../modules/cluster.md#itemgraph)<Item\>, `getItemLabel`: [*GetItemLabel*](../modules/cluster.md#getitemlabel)<Item\>) => *Record*<string, number\>

#### Type declaration

▸ (`graph`: [*ItemGraph*](../modules/cluster.md#itemgraph)<Item\>, `getItemLabel`: [*GetItemLabel*](../modules/cluster.md#getitemlabel)<Item\>): *Record*<string, number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | [*ItemGraph*](../modules/cluster.md#itemgraph)<Item\> |
| `getItemLabel` | [*GetItemLabel*](../modules/cluster.md#getitemlabel)<Item\> |

**Returns:** *Record*<string, number\>

Defined in: hamming.ts:17

___

### fingerprintBits

• `Optional` **fingerprintBits**: *number*

Defined in: hamming.ts:12

___

### nearnessThreshhold

• `Optional` **nearnessThreshhold**: *number*

Defined in: hamming.ts:13

___

### rehash

• `Optional` **rehash**: HashFunction[]

Defined in: hamming.ts:15

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

Defined in: hamming.ts:16

___

### rounds

• `Optional` **rounds**: *number*

Defined in: hamming.ts:14
