import img1 from '../assets/player-1.png'
import Card from './Card';
const Cards = () => {
    const cardsData = [
        {
            id: 1,
            clientName: 'Client Name',
            sadikIstiak: 'Sadik Istiak',
            lorem: 'Lorem ipsum dolor sit amet console...',
            task: '1/2',
            avatar: img1
        },
        {
            id: 2,
            clientName: 'Client Name',
            sadikIstiak: 'Sadik Istiak',
            lorem: 'Lorem ipsum dolor sit amet console...',
            task: '1/2',
            avatar: img1
        },
        {
            id: 3,
            clientName: 'Client Name',
            sadikIstiak: 'Sadik Istiak',
            lorem: 'Lorem ipsum dolor sit amet console...',
            task: '1/2',
            avatar: img1
        },
        {
            id: 4,
            clientName: 'Client Name',
            sadikIstiak: 'Sadik Istiak',
            lorem: 'Lorem ipsum dolor sit amet console...',
            task: '1/2',
            avatar: img1
        },
        {
            id: 5,
            clientName: 'Client Name',
            sadikIstiak: 'Sadik Istiak',
            lorem: 'Lorem ipsum dolor sit amet console...',
            task: '1/2',
            avatar: img1
        },
        {
            id: 6,
            clientName: 'Client Name',
            sadikIstiak: 'Sadik Istiak',
            lorem: 'Lorem ipsum dolor sit amet console...',
            task: '1/2',
            avatar: img1
        }
    ]
    return (
        <div className='flex flex-col gap-5'>
            {cardsData.map((data) => (
                <Card key={data.id} data={data} />
            ))}
        </div>
    );
};

export default Cards;