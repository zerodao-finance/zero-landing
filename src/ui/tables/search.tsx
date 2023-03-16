import { AiOutlineSearch } from 'react-icons/ai';

type ITableSearchProps = {
  searchFx: any;
  value: any;
  onChange: any;
};

function TableSearch(props: ITableSearchProps) {
  return (
    <div
      className={`flex items-center gap-2 color-white bg-gray-800 px-5 py-2 rounded-xl mb-5 mt-3 max-w-[100%] lg:max-w-[50%] 2xl:max-w-[584px]`}
    >
      <div>
        <AiOutlineSearch size="24px" />
      </div>
      <input
        className={`bg-gray-800 placeholder-gray-100 w-full focus:outline-none`}
        type="text"
        id="table-input"
        onKeyUp={props.searchFx}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder="Search by transaction hash..."
      />
      {/* Fix clearing function */}
      {/* {props.value && (
                <div 
                    onClick={() => {
                        props.onChange('');
                        window.dispatchEvent(new KeyboardEvent('keydown', {
                            'key': 's'
                        }))
                    }}
                >
                    <AiOutlineClose size="20px" />
                </div>
            )} */}
    </div>
  );
}

export { TableSearch };
