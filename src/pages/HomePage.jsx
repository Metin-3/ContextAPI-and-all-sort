import { useContext, useState } from 'react'
import { DataContext } from '../context/DataProvider';
import { Button, Card, Input } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Link} from 'react-router-dom';

const HomePage = () => {
    const { data, filteredData, setFilteredData } = useContext(DataContext);
    const [searchTerm, setSearchTerm] = useState('');


    //! A-Z SORT
    const sortAZ = () => {
        const sorted = [...filteredData].sort((a, b) => a.title.localeCompare(b.title));
        setFilteredData(sorted);
    };

    //! Z-A SORT
    const sortZA = () => {
        const sorted = [...filteredData].sort((a, b) => b.title.localeCompare(a.title));
        setFilteredData(sorted);
    };

    //! PRICE SORT
    const sortPriceAscending = () => {
        const sorted = [...filteredData].sort((a, b) => a.price - b.price);
        setFilteredData(sorted);
    };

    const sortPriceDescending = () => {
        const sorted = [...filteredData].sort((a, b) => b.price - a.price);
        setFilteredData(sorted);
    };


    //! SEARCH SORT
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const lowerCaseTerm = e.target.value.toLowerCase();
        setFilteredData(data.filter(item => item.title.toLowerCase().includes(lowerCaseTerm)));
    };


    //! CAtegory SORT
    const filterByCategory = (category) => {
        if (category === 'all') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(item => item.category === category));
        }
    };
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: "20px" }}>
                <Input
                    style={{ width: '300px' }}
                    type="text"
                    placeholder="Axtarış..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <Button type='primary' onClick={() => sortAZ()}>A-Z</Button>
                <Button type='primary' onClick={() => sortZA()}>Z-A</Button>
                <Button onClick={() => sortPriceAscending()}>Ucuzdan-Bahaya</Button>
                <Button onClick={() => sortPriceDescending()}>Bahadan-Ucuza</Button>
                <select
                    style={{ width: '300px', padding: "5px" }}
                    onChange={(e) => filterByCategory(e.target.value)}
                >
                    <option value="all">Hamısı</option>
                    <option value="men's clothing">{`men's clothing`}</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                    <option value="women's clothing">{`women's clothing`}</option>
                </select>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', paddingTop: '30px', paddingBottom: '30px' }}>
                {filteredData.map((item) => (
                    <div key={item.id}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img style={{ width: '100%', height: '250px', objectFit: 'cover' }} alt="image" src={item.image} />}
                        >
                            <Meta
                                title={item.title}
                                description={`${item.price} AZN`}
                            />
                            <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                                <Link type='primary' to={`/${item.id}`}>Detail</Link>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default HomePage