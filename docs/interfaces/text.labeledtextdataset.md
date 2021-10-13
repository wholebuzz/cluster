[@wholebuzz/cluster](../README.md) / [Exports](../modules.md) / [text](../modules/text.md) / LabeledTextDataset

# Interface: LabeledTextDataset<Item\>

[text](../modules/text.md).LabeledTextDataset

## Type parameters

| Name |
| :------ |
| `Item` |

## Hierarchy

- [*TextDataset*](text.textdataset.md)<Item\>

- [*LabeledDataset*](cluster.labeleddataset.md)<Item\>

  ↳ **LabeledTextDataset**

## Table of contents

### Properties

- [getItemDebug](text.labeledtextdataset.md#getitemdebug)
- [getItemLabel](text.labeledtextdataset.md#getitemlabel)
- [getText](text.labeledtextdataset.md#gettext)
- [idf](text.labeledtextdataset.md#idf)
- [items](text.labeledtextdataset.md#items)

## Properties

### getItemDebug

• `Optional` **getItemDebug**: (`item`: Item) => *string*

#### Type declaration

▸ (`item`: Item): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | Item |

**Returns:** *string*

Inherited from: [LabeledDataset](cluster.labeleddataset.md).[getItemDebug](cluster.labeleddataset.md#getitemdebug)

Defined in: cluster.ts:16

___

### getItemLabel

• **getItemLabel**: [*GetItemLabel*](../modules/cluster.md#getitemlabel)<Item\>

Inherited from: [LabeledDataset](cluster.labeleddataset.md).[getItemLabel](cluster.labeleddataset.md#getitemlabel)

Defined in: cluster.ts:15

___

### getText

• **getText**: (`x`: Item) => *string*

#### Type declaration

▸ (`x`: Item): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | Item |

**Returns:** *string*

Inherited from: [TextDataset](text.textdataset.md).[getText](text.textdataset.md#gettext)

Defined in: text.ts:9

___

### idf

• **idf**: IDFMap

Inherited from: [TextDataset](text.textdataset.md).[idf](text.textdataset.md#idf)

Defined in: text.ts:10

___

### items

• **items**: Item[]

Inherited from: [LabeledDataset](cluster.labeleddataset.md).[items](cluster.labeleddataset.md#items)

Defined in: text.ts:11
