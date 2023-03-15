import { FC } from 'react';

interface Props {
  color: string;
  flip: boolean;
  onClick: () => void;
}

const Arrow: FC<Props> = ({ color, flip, onClick }): JSX.Element => {
  let classNameString = flip
    ? 'flex justify-center items-center px-3 rounded-md transform -scale-x-100'
    : 'flex justify-center items-center px-3 rounded-md';
  if (color === '#1D1D1B') {
    classNameString = classNameString + ' hover:bg-[#FCD676]';
  }

  return (
    <div className={classNameString} onClick={onClick}>
      <svg
        width="4"
        height="7"
        viewBox="0 0 4 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.50534 0.605767C3.64637 0.74679 3.64637 0.975433 3.50534 1.11646L0.871799 3.75L3.50534 6.38354C3.64637 6.52457 3.64637 6.75321 3.50534 6.89423C3.36432 7.03526 3.13568 7.03526 2.99466 6.89423L0.105767 4.00534C-0.0352557 3.86432 -0.0352557 3.63568 0.105767 3.49466L2.99466 0.605767C3.13568 0.464744 3.36432 0.464744 3.50534 0.605767Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Arrow;
