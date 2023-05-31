import MenuItem from './MenuItem';

const MenuListItems = (props) => {
  const { filteredMenu } = props;

  return (
    <section className='menu'>
      {filteredMenu.map((item, indx) => (
        <MenuItem key={indx} item={item} />
      ))}
    </section>
  );
};

export default MenuListItems;
