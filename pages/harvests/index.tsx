import { Harvest } from '@/schemas/harvest';
import { FC, useEffect, useState } from 'react';

interface HarvestsResponse {
  harvests: Harvest[];
  count: number;
}

interface Props {}

const Harvests: FC<Props> = (props): JSX.Element => {
  const [error, setError] = useState(false);
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
    fetchHarvests(1);
  }, []);

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
      <div className="space-y-1 px-5 pt-5 pb-20 bg-white-normal rounded-2xl">
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
    </div>
  );
};

export default Harvests;
