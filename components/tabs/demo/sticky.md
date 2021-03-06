---
order: 1
title:
  zh-CN: TabBar sticky
  en-US: 'Sticky'
---

use react-sticky

````jsx
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

function renderTabBar(props) {
  return (<Sticky style={{ zIndex: 1 }}>
    <Tabs.DefaultTabBar {...props} />
  </Sticky>);
}
const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];

const TabExample = () => (
  <div>
    <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={tabs}
        initalPage={'t2'}
        renderTabBar={renderTabBar}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of First Tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of Second Tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
          Content of Third Tab
        </div>
      </Tabs>
    </StickyContainer>
    <WhiteSpace />
  </div>
);

ReactDOM.render(<TabExample />, mountNode);
````
