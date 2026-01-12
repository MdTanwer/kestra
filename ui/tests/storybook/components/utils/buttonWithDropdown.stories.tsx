import type { Meta, StoryObj } from "@storybook/vue3";
import ButtonWithDropdown from "../../../../src/components/utils/buttonWithDropdown.vue";
import { markRaw } from "vue";
import { Download, VideoPlay, VideoPause, Delete, Edit, Setting } from "@element-plus/icons-vue";

const meta: Meta<typeof ButtonWithDropdown> = {
    title: "components/utils/ButtonWithDropdown",
    component: ButtonWithDropdown,
};

export default meta;

export const Default: StoryObj<typeof ButtonWithDropdown> = {
    render: () => ({
        components: { ButtonWithDropdown },
        setup() {
            const items = [
                {
                    command: "download",
                    label: "Download",
                    icon: markRaw(Download),
                      action: (item: any) => {
                        console.log("Download clicked:", item);
                    }
                },
                {
                    command: "edit",
                    label: "Edit",
                    icon: markRaw(Edit),
                      action: (item: any) => {
                        console.log("Edit clicked:", item);
                    }
                },
                {
                    command: "delete",
                    label: "Delete",
                    icon: markRaw(Delete),
                    divided: true,
                    action: (item: any) => {
                        console.log("Delete clicked:", item);
                    }
                },
            ] as any;

            const handleMainButtonClick = () => {
                console.log("Main button clicked by user");
            };

            return () => (
                <div style="display: flex; justify-content: center; align-items: center; min-height: 100px;">
                    <ButtonWithDropdown
                        text="Actions"
                        dropdownItems={items}
                        action={handleMainButtonClick}
                    />
                </div>
            );
        },
    }),
};

export const PrimaryOnly: StoryObj<typeof ButtonWithDropdown> = {
    args: {
        text: "Run Flow",
        type: "success",
        icon: markRaw(VideoPlay),
        action: () => {
            console.log("Primary action executed");
        },
    },
};

export const SplitButton: StoryObj<typeof ButtonWithDropdown> = {
    args: {
        text: "Execute",
        type: "primary",
        icon: markRaw(VideoPlay),
        showDropdownIcon: true,
        dropdownItems: [
            {
                command: "execute-now",
                label: "Execute Now",
                icon: markRaw(VideoPlay),
            },
            {
                command: "schedule",
                label: "Schedule Execution",
                icon: markRaw(Setting),
            },
            {
                command: "execute-with-inputs",
                label: "Execute with Inputs",
                icon: markRaw(Edit),
                divided: true,
            },
        ] as any,
    },
};

export const Variants: StoryObj<typeof ButtonWithDropdown> = {
    render: () => ({
        components: { ButtonWithDropdown },
        setup() {
            return () => (
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                    <ButtonWithDropdown
                        text="Primary"
                        type="primary"
                        showDropdownIcon={true}
                        dropdownItems={[{ command: "settings", label: "Settings", icon: markRaw(Setting) }]}
                    />
                    <ButtonWithDropdown
                        text="Success"
                        type="success"
                        showDropdownIcon={true}
                        dropdownItems={[{ command: "settings", label: "Settings", icon: markRaw(Setting) }]}
                    />
                    <ButtonWithDropdown
                        text="Warning"
                        type="warning"
                        showDropdownIcon={true}
                        dropdownItems={[{ command: "settings", label: "Settings", icon: markRaw(Setting) }]}
                    />
                    <ButtonWithDropdown
                        text="Danger"
                        type="danger"
                        showDropdownIcon={true}
                        dropdownItems={[{ command: "settings", label: "Settings", icon: markRaw(Setting) }]}
                    />
                    <ButtonWithDropdown
                        text="Info"
                        type="info"
                        showDropdownIcon={true}
                        dropdownItems={[{ command: "settings", label: "Settings", icon: markRaw(Setting) }]}
                    />
                </div>
            );
        },
    }),
};

export const Sizes: StoryObj<typeof ButtonWithDropdown> = {
    render: () => ({
        components: { ButtonWithDropdown },
        setup() {
            const items = [
                { command: "action", label: "Action", icon: markRaw(Setting) },
            ];

            return () => (
                <div style="display: flex; gap: 12px; align-items: center;">
                    <ButtonWithDropdown
                        text="Large"
                        size="large"
                        showDropdownIcon={true}
                        dropdownItems={items}
                    />
                    <ButtonWithDropdown
                        text="Default"
                        size="default"
                        showDropdownIcon={true}
                        dropdownItems={items}
                    />
                    <ButtonWithDropdown
                        text="Small"
                        size="small"
                        showDropdownIcon={true}
                        dropdownItems={items}
                    />
                    <div style="margin-left: 20px;">
                        <ButtonWithDropdown
                            text="Single"
                            size="default"
                            showDropdownIcon={false}
                            dropdownItems={[]}
                        />
                    </div>
                </div>
            );
        },
    }),
};

export const States: StoryObj<typeof ButtonWithDropdown> = {
    render: () => ({
        components: { ButtonWithDropdown },
        setup() {
            const items = [
                { command: "action", label: "Action", icon: markRaw(Setting) },
            ];

            return () => (
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                    <ButtonWithDropdown
                        text="Normal Split"
                        showDropdownIcon={true}
                        dropdownItems={items}
                    />
                    <ButtonWithDropdown
                        text="Loading Split"
                        loading={true}
                        showDropdownIcon={true}
                        dropdownItems={items}
                    />
                    <ButtonWithDropdown
                        text="Disabled Split"
                        disabled={true}
                        showDropdownIcon={true}
                        dropdownItems={items}
                    />
                    <div style="margin-left: 20px; display: flex; gap: 12px;">
                        <ButtonWithDropdown
                            text="Normal Single"
                            showDropdownIcon={false}
                            dropdownItems={[]}
                        />
                        <ButtonWithDropdown
                            text="Disabled Single"
                            disabled={true}
                            showDropdownIcon={false}
                            dropdownItems={[]}
                        />
                    </div>
                </div>
            );
        },
    }),
};

export const ExecutionActions: StoryObj<typeof ButtonWithDropdown> = {
    args: {
        text: "Execute",
        type: "success",
        icon: markRaw(VideoPlay),
        showDropdownIcon: true,
        dropdownItems: [
            {
                command: "execute",
                label: "Execute Now",
                icon: markRaw(VideoPlay),
            },
            {
                command: "execute-with-inputs",
                label: "Execute with Inputs",
                icon: markRaw(Edit),
            },
            {
                command: "schedule",
                label: "Schedule",
                icon: markRaw(Setting),
                divided: true,
            },
            {
                command: "pause",
                label: "Pause",
                icon: markRaw(VideoPause),
            },
        ] as any,
    },
};

export const Interactive: StoryObj<typeof ButtonWithDropdown> = {
    render: () => ({
        components: { ButtonWithDropdown },
        setup() {
            const handlePrimaryClick = () => {
                console.log("Primary button clicked");
            };

            const handleItemClick = (item: any) => {
                console.log("Dropdown item clicked:", item);
            };

            const items: any[] = [
                { command: "action1", label: "Action 1" },
                { command: "action2", label: "Action 2" },
                { command: "disabled", label: "Disabled Action", disabled: true },
            ];

            return () => (
                <div style="padding: 20px;">
                    <div style="margin-bottom: 20px;">
                        <h4>Split Button (Main + Dropdown)</h4>
                        <ButtonWithDropdown
                            text="Interactive Example"
                            showDropdownIcon={true}
                            dropdownItems={items}
                            action={handlePrimaryClick}
                            onItem-click={handleItemClick}
                        />
                    </div>
                    <div style="margin-bottom: 20px;">
                        <h4>Single Button (No Dropdown)</h4>
                        <ButtonWithDropdown
                            text="Single Action"
                            showDropdownIcon={false}
                            dropdownItems={[]}
                            action={handlePrimaryClick}
                        />
                    </div>
                </div>
            );
        },
    }),
};
