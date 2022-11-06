interface IGameCardProps {
  gameId: string;
  title: string; 
  provider: string;
}

export const GameCard = ({ title, provider }: IGameCardProps) => {  
  return <div>
    <div>{title}</div>
    <div>{provider}</div>
  </div>
}