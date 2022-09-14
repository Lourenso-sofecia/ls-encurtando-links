import React from 'react'
import { Search } from '../context/Search';

export const Searchs = ({info}) => {
  return (
    <>
        {
          info?.map((infos) => (
            <>
              {console.log(infos.info_original_link,"teste", infos.id)}
              <Search key={infos.id} infos={infos} />
            </>
          ))
        }
    </>
  );
};
