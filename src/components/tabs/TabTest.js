import CustomTabs from "./Tabs";
function RandomComponent() {
  return <span className="content">This is random content from a random component   </span>;
}
export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>This is content for Tab 3</div>,
    },
    {
      label: "Tab 4",
      content: <RandomComponent />,
    },
  ];
  return <CustomTabs tabsContent={tabs} />;
}
