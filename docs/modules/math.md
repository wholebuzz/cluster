[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / math

# Module: math

## Table of contents

### Variables

- [objectCosineSimilarity](math.md#objectcosinesimilarity)
- [vectorCosineSimilarity](math.md#vectorcosinesimilarity)

### Functions

- [isOneDimensional](math.md#isonedimensional)
- [mahalanobisDistance2](math.md#mahalanobisdistance2)
- [maxIndex](math.md#maxindex)
- [maxKey](math.md#maxkey)
- [newPermutation](math.md#newpermutation)
- [objectMean](math.md#objectmean)
- [softMax](math.md#softmax)

## Variables

### objectCosineSimilarity

• `Const` **objectCosineSimilarity**: *any*

Defined in: [math.ts:2](https://github.com/wholebuzz/cluster/blob/master/src/math.ts#L2)

___

### vectorCosineSimilarity

• `Const` **vectorCosineSimilarity**: *any*

Defined in: [math.ts:1](https://github.com/wholebuzz/cluster/blob/master/src/math.ts#L1)

## Functions

### isOneDimensional

▸ **isOneDimensional**(`arr`: *number*[] \| *number*[][]): arr is number[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | *number*[] \| *number*[][] |

**Returns:** arr is number[]

Defined in: [math.ts:4](https://github.com/wholebuzz/cluster/blob/master/src/math.ts#L4)

___

### mahalanobisDistance2

▸ **mahalanobisDistance2**(`mean`: *number*[], `diagCovar`: *number*[], `vector`: *number*[]): *number*

Computes Mahalanobis distance squared from mean to vector, given a diagonal covariance matrix.
This is the primary term in Guassian PDF.
References: [[1](https://en.wikipedia.org/wiki/Mahalanobis_distance)]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mean` | *number*[] | The center to measure distance from. |
| `diagCovar` | *number*[] | Array specifying the diagonal of the covariance matrix. |
| `vector` | *number*[] | The query vector to measure distance to. |

**Returns:** *number*

Defined in: [math.ts:37](https://github.com/wholebuzz/cluster/blob/master/src/math.ts#L37)

___

### maxIndex

▸ **maxIndex**(`arr`: *number*[]): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | *number*[] |

**Returns:** *number*

Defined in: [math.ts:8](https://github.com/wholebuzz/cluster/blob/master/src/math.ts#L8)

___

### maxKey

▸ `Const` **maxKey**(`obj`: *Record*<string, number\>): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | *Record*<string, number\> |

**Returns:** *string*

Defined in: [math.ts:12](https://github.com/wholebuzz/cluster/blob/master/src/math.ts#L12)

___

### newPermutation

▸ **newPermutation**(`d`: *number*): *bigint*[]

Creates a random permutation of the integers from 0 to d - 1.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `d` | *number* | The number of integers in the set. |

**Returns:** *bigint*[]

Defined in: [math.ts:50](https://github.com/wholebuzz/cluster/blob/master/src/math.ts#L50)

___

### objectMean

▸ **objectMean**(`arr`: *Record*<string, number\>[] \| *number*[][]): *Record*<string, number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | *Record*<string, number\>[] \| *number*[][] |

**Returns:** *Record*<string, number\>

Defined in: [math.ts:22](https://github.com/wholebuzz/cluster/blob/master/src/math.ts#L22)

___

### softMax

▸ **softMax**(`values`: *number*[]): *number*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | *number*[] |

**Returns:** *number*[]

Defined in: [math.ts:15](https://github.com/wholebuzz/cluster/blob/master/src/math.ts#L15)
