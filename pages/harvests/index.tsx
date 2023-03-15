import { Harvest } from '@/schemas/harvest';
import { getPaginationNumbers } from '@/utils/paginationNumbers';
import { FC, useEffect, useState } from 'react';
import Arrow from '../../components/arrow';

interface HarvestsResponse {
  harvests: Harvest[];
  count: number;
}

interface Props {}

const Harvests: FC<Props> = (props): JSX.Element => {
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [harvests, setHarvests] = useState<Harvest[]>([]);

  const fetchHarvests = async (pageNumber: number) => {
    try {
      const response = await fetch(
        `https://testapi.onesta.farm/v1/harvests?page=${pageNumber}`
      );
      if (response.ok) {
        const harvestsResponse: HarvestsResponse = await response.json();
        setHarvests(harvestsResponse.harvests);
        console.log(harvestsResponse);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchHarvests(currentPage);
  }, [currentPage]);

  if (error) {
    return (
      <div className="flex content-center justify-center text-6xl font-black">
        Hay un error al cargar las Cosechas
      </div>
    );
  }

  return (
    <div className="mx-14 mt-11">
      <div className="flex mb-6">
        <div className="nav-text text-[#858585]">Home</div>
        <div className="nav-text text-[#1D1D1B]">/</div>
        <div className="nav-text text-[#1D1D1B]">Cosechas</div>
      </div>
      <div className="flex auto justify-between mb-8 border-b border-[#D1D1D1]">
        <div className="not-italic font-bold text-2xl mb-8">Cosechas</div>
        <div className="w-48 h-10 bg-[#034BE5] rounded-3xl flex justify-center items-center mb-1">
          <div className="text-white-normal not-italic font-thin text-xl mr-2 mb-1">
            +
          </div>
          <div className="text-white-normal not-italic text-lg font-['Hind_Siliguri'] font-black">
            Agregar cosecha
          </div>
        </div>
      </div>
      <div className="px-5 pt-5 pb-8 bg-white-normal rounded-2xl">
        <div className="space-y-1">
          <div className="flex">
            <div className="init-row-desc">Agricultor</div>
            <div className="row-desc">Fruta</div>
            <div className="row-desc">Variedad</div>
            <div className="row-desc">Campo</div>
            <div className="final-row-desc">Cliente</div>
          </div>
          {harvests.map((harvest) => (
            <div key={harvest.id} className="flex">
              <div className="init-row-item">{harvest.grower.name}</div>
              <div className="row-item">{harvest.commodity.name}</div>
              <div className="row-item">{harvest.variety.name}</div>
              <div className="row-item">{harvest.farm.name}</div>
              <div className="final-row-item">{harvest.client.name}</div>
            </div>
          ))}
        </div>
        <div className="flex pt-9 justify-end mr-5">
          <Arrow
            color={currentPage === 1 ? '#858585' : '#1D1D1B'}
            flip={false}
            onClick={() => {
              if (currentPage !== 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          />
          {getPaginationNumbers(currentPage).map((num) => {
            const currentClassName =
              num === currentPage
                ? 'text-[#1D1D1B] not-italic font-normal text-sm py-1 px-3 bg-[#034BE5] text-white-normal rounded-md'
                : 'text-[#1D1D1B] not-italic font-normal text-sm py-1 px-3 hover:bg-[#FCD676] hover:rounded-md';
            return (
              <div
                key={num}
                className={currentClassName}
                onClick={() => setCurrentPage(num)}
              >
                {num}
              </div>
            );
          })}
          <Arrow
            color={currentPage === 10 ? '#858585' : '#1D1D1B'}
            flip={true}
            onClick={() => {
              if (currentPage !== 10) {
                setCurrentPage(currentPage + 1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Harvests;
