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
- [newPermutation](math.md#newpermutation)
- [objectMean](math.md#objectmean)
- [softMax](math.md#softmax)

## Variables

### objectCosineSimilarity

• `Const` **objectCosineSimilarity**: *any*

Defined in: math.ts:2

___

### vectorCosineSimilarity

• `Const` **vectorCosineSimilarity**: *any*

Defined in: math.ts:1

## Functions

### isOneDimensional

▸ **isOneDimensional**(`arr`: *number*[] \| *number*[][]): arr is number[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | *number*[] \| *number*[][] |

**Returns:** arr is number[]

Defined in: math.ts:4

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

Defined in: math.ts:34

___

### maxIndex

▸ **maxIndex**(`arr`: *number*[]): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | *number*[] |

**Returns:** *number*

Defined in: math.ts:8

___

### newPermutation

▸ **newPermutation**(`d`: *number*): *bigint*[]

Creates a random permutation of the integers from 0 to d - 1.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `d` | *number* | The number of integers in the set. |

**Returns:** *bigint*[]

Defined in: math.ts:47

___

### objectMean

▸ **objectMean**(`arr`: *Record*<string, number\>[] \| *number*[][]): *Record*<string, number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | *Record*<string, number\>[] \| *number*[][] |

**Returns:** *Record*<string, number\>

Defined in: math.ts:19

___

### softMax

▸ **softMax**(`values`: *number*[]): *number*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | *number*[] |

**Returns:** *number*[]

Defined in: math.ts:12
