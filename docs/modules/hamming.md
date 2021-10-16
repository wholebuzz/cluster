[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / hamming

# Module: hamming

## Table of contents

### Interfaces

- [ClusterByHammingDistanceOptions](../interfaces/hamming.clusterbyhammingdistanceoptions.md)

### Variables

- [one](hamming.md#one)
- [zero](hamming.md#zero)

### Functions

- [addHammingNeighbors](hamming.md#addhammingneighbors)
- [clusterByHammingDistance](hamming.md#clusterbyhammingdistance)
- [hammingDistance](hamming.md#hammingdistance)
- [hammingDistanceConstantTimeFunction](hamming.md#hammingdistanceconstanttimefunction)
- [hammingWeight](hamming.md#hammingweight)
- [permuteBits](hamming.md#permutebits)

## Variables

### one

• `Const` **one**: *bigint*

Defined in: [hamming.ts:8](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L8)

___

### zero

• `Const` **zero**: *bigint*

Defined in: [hamming.ts:7](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L7)

## Functions

### addHammingNeighbors

▸ **addHammingNeighbors**<Item\>(`output`: [*ItemGraph*](cluster.md#itemgraph)<Item\>, `data`: *FingerprintedLabeledDataset*<Item\>, `threshhold`: *number*, `beamWidth`: *number*, `hammingDist`: (`x`: *bigint*, `y`: *bigint*) => *number*): [*ItemGraph*](cluster.md#itemgraph)<Item\>

Finds approximate nearest neighbors by Hamming distance.
References: [[1](https://dash.harvard.edu/bitstream/handle/1/38811431/GHOCHE-SENIORTHESIS-2016.pdf)]

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `output` | [*ItemGraph*](cluster.md#itemgraph)<Item\> | - |
| `data` | *FingerprintedLabeledDataset*<Item\> | - |
| `threshhold` | *number* | Maximum Hamming distance for two articles to be considered neighbors. |
| `beamWidth` | *number* | Number of sort-order adjacent points to check for nearness. |
| `hammingDist` | (`x`: *bigint*, `y`: *bigint*) => *number* | - |

**Returns:** [*ItemGraph*](cluster.md#itemgraph)<Item\>

Defined in: [hamming.ts:64](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L64)

___

### clusterByHammingDistance

▸ **clusterByHammingDistance**<Item\>(`data`: *FingerprintedLabeledDataset*<Item\>, `options?`: [*ClusterByHammingDistanceOptions*](../interfaces/hamming.clusterbyhammingdistanceoptions.md)<Item\>): [*ItemClustering*](cluster.md#itemclustering)

Clusters [[FingerprintedLabeledDataset]] by Hamming distance.
References: [[1](https://dash.harvard.edu/bitstream/handle/1/38811431/GHOCHE-SENIORTHESIS-2016.pdf)]

**`optional`** options The [[ClusterOptions]] to apply.

#### Type parameters

| Name |
| :------ |
| `Item` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | *FingerprintedLabeledDataset*<Item\> |
| `options?` | [*ClusterByHammingDistanceOptions*](../interfaces/hamming.clusterbyhammingdistanceoptions.md)<Item\> |

**Returns:** [*ItemClustering*](cluster.md#itemclustering)

Defined in: [hamming.ts:26](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L26)

___

### hammingDistance

▸ **hammingDistance**(`x`: *bigint*, `y`: *bigint*): *number*

Returns Hamming distance between points.
References: [[1](https://en.wikipedia.org/wiki/Hamming_distance)]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | *bigint* | First point to compare. |
| `y` | *bigint* | Second point to compare. |

**Returns:** *number*

Defined in: [hamming.ts:94](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L94)

___

### hammingDistanceConstantTimeFunction

▸ **hammingDistanceConstantTimeFunction**(`bits`: *number*): *function*

Returns function for Hamming distance using constant-time algorithm.
It's just a little slower than [hammingDistance](hamming.md#hammingdistance) for 64 bit hashes.
References: [[1](https://en.wikipedia.org/wiki/Hamming_distance)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `bits` | *number* |

**Returns:** (`x`: *bigint*, `y`: *bigint*) => *number*

Defined in: [hamming.ts:116](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L116)

___

### hammingWeight

▸ **hammingWeight**(`x`: *bigint*): *number*

Returns Hamming weight for point.
References: [[1](https://en.wikipedia.org/wiki/Hamming_weight)]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | *bigint* | The [[bigint]] to count the set bits of. |

**Returns:** *number*

Defined in: [hamming.ts:103](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L103)

___

### permuteBits

▸ **permuteBits**(`x`: *bigint*, `permutation`: *bigint*[]): *bigint*

Reorders the bits in the input according to the supplied permutation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | *bigint* | The input bits to permute. |
| `permutation` | *bigint*[] | Order created by [newPermutation](math.md#newpermutation). |

**Returns:** *bigint*

Defined in: [hamming.ts:128](https://github.com/wholebuzz/cluster/blob/master/src/hamming.ts#L128)
