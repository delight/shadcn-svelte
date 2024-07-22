import { Select as SelectPrimitive } from "bits-ui";

import GroupLabel from "./select-group-label.svelte";
import Item from "./select-item.svelte";
import Content from "./select-content.svelte";
import Trigger from "./select-trigger.svelte";
import Separator from "./select-separator.svelte";
import ScrollDownButton from "./select-scroll-down-button.svelte";
import ScrollUpButton from "./select-scroll-up-button.svelte";

const Root = SelectPrimitive.Root;
const Group = SelectPrimitive.Group;
const Value = SelectPrimitive.Value;

export {
	Root,
	Group,
	GroupLabel,
	Item,
	Value,
	Content,
	Trigger,
	Separator,
	ScrollDownButton,
	ScrollUpButton,
	//
	Root as Select,
	Group as SelectGroup,
	GroupLabel as SelectLabel,
	Item as SelectItem,
	Value as SelectValue,
	Content as SelectContent,
	Trigger as SelectTrigger,
	Separator as SelectSeparator,
	ScrollDownButton as SelectScrollDownButton,
	ScrollUpButton as SelectScrollUpButton,
};