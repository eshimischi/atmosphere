import {format, parseISO} from "date-fns";

export const cellProps = {
    fieldName: {
        type: String
    },
    field: {
        type: Object,
        default() {
            return {};
        }
    },
    fieldType: {
        type: String,
        default: "text"
    },
    item: {
        type: Object
    },
    index: {
        type: Number
    },
    isNew: {
        type: Boolean
    },
    isTitle: {
        type: Boolean
    }
}
export const  setDate = (dateValue) => {
    const date = dateValue ? dateValue.split("-") : null;
    return date ? new Date(date[0], date[1] - 1, date[2]) : null;
}

export const setTime = (timeValue) => {
    let date = timeValue ? timeValue.split(":") : null;
    const dateTime = new Date();
    dateTime.setHours(date[0]);
    dateTime.setMinutes(date[1]);
    dateTime.setSeconds(0);
    return dateTime;
};
export const formatValue = (value, type = "default", operation = "read") => {
    const formatters = {
        date: {
            write: (value = "") => {
                return typeof value == "string"
                    ? value
                    : format(value, "yyyy-MM-dd");
            },
            read: (value = "") => {
                try {
                    if (value instanceof Date) {
                        return value
                    }
                    else if (parseISO(value)) {
                        return parseISO(value)
                    } else if (typeof value == "string") {
                        return setDate(value)
                    }
                } catch (err) {
                    console.log(err)
                    return value;
                }
            },
            display: (value = "") => {
                const valueType = typeof value;
                if (valueType == 'string') {
                    return value;
                } else if (value instanceof Date) {
                    try {
                        return format(value, "yyyy-MM-dd");
                    } catch (e) {
                        return value;
                    }
                } else {
                    return value
                }
            }
        },
        time: {
            write: (value = "") => {
                return typeof value == "string"
                    ? value
                    : format(value, "HH:mm");
            },
            read: (value = "") => {
                const theValue = value && typeof value == "string"
                    ? setTime(value)
                    : value;
                return theValue;
            }
        },
        default: {
            read: value => value,
            write: value => value
        }
    };
    return formatters[type] && formatters[type][operation]
        ? formatters[type][operation](value)
        : value;
};


export default {
    props: {
        ...cellProps
    },
    computed: {
        displayValue() {
            if (["select", "label"].includes(this.field.type)) {
                const option = this.field.options.find(option => {
                    return option.name == this.value;
                });
                return option
                    ? option.label || option.name
                    : this.item[this.fieldName];
            } else if (["date"].includes(this.field.type)) {
                if (this.item[this.fieldName]) {
                    return typeof this.item[this.fieldName] == "string"
                        ? this.item[this.fieldName]
                        : format(new Date(this.item[this.fieldName]),"yyyy-MM-dd");
                }
                return "";
            } else {
                return this.item[this.fieldName];
            }
        }
    },
    methods: {
        formatValue,
        setDate,
        setTime,

        focusCell() {
            if (this.$refs.input) {
                const input =
                    this.$refs.input.$el && !this.$refs.input.focus
                        ? this.$refs.input.$el
                        : this.$refs.input;
                input.focus();
            }
        },

        focus() {
            if (this.$refs.input) {
                const input =
                    this.$refs.input.$el && !this.$refs.input.focus
                        ? this.$refs.input.$el
                        : this.$refs.input;
                input.focus();
            }
        },

        toggleEditMode() {
            this.isEditMode = !this.isEditMode;
            this.$nextTick(() => {
                if (this.$refs.input) {
                    const input =
                        this.$refs.input.$el && !this.$refs.input.focus
                            ? this.$refs.input.$el
                            : this.$refs.input;
                    input.focus();
                }
            });
        },

        saveChanges(type = "default") {
            this.$emit("saved", this.formatValue(this.value, type, "write"));
            this.toggleEditMode();
        },

        saveItem($event) {
            this.saveChanges();
            this.$emit("keydown", $event);
            this.toggleEditMode();
        }
    }
}
