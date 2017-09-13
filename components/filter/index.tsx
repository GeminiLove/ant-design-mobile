import React from 'react';
import Flex from '../flex';

class Filter extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-filter',
  };

  render() {
    const { prefixCls, data } = this.props;
    const FilterItemArr: any[] = [];
    data.forEach((el) => {
      let iconImg;
      if (el.selected) {
        if (el.selectedIcon) {
          iconImg = <img src={el.selectedIcon} />;
        }
      } else {
        if (el.icon) {
          iconImg = <img src={el.icon} />;
        }
      }

      const itemCls = {
        [el.className as string]: el.className,
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-selected`]: el.selected,
        [`${prefixCls}-item-custom-icon`]: (el.selected && el.selectedIcon || el.selected === false && el.icon),
      };

      const flexItem = (<Flex.Item
        onClick={() => el.onClick && el.onClick(el)}
        className={itemCls}
      >
        <div className={`${prefixCls}-label`}>{el.text}</div>
        <div className={`${prefixCls}-icon`}>{iconImg}</div>
      </Flex.Item>);

      FilterItemArr.push(flexItem);
    });
    return <Flex className={prefixCls}>
      {FilterItemArr}
    </Flex>;
  }
}

export default Filter;
