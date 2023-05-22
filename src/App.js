import { Products } from './components/products';
import contexts from './context';
import { useState } from 'react';

export default function App() {
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = contexts.slice(firstIndex, lastIndex);
    const npage = Math.ceil(contexts.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    return (
        <div className='title'>
            <h1>Makeup</h1>
            <div className='App'>
                {records.map(records => (
                    <Products
                        image={records.image.url}
                        name={records.brand.name}
                        detail={records.name}
                        price={records.price_range.maximum_price.regular_price.value}
                        totalSales={records.price_range.maximum_price.regular_price.currency}
                        timeLeft={records.timeLeft}
                        rating={records.rating}
                    />
                ))}

            </div>
            <div className="pagination">
                {numbers.map((page, i) => {
                    return (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(page)}
                            className={page == currentPage ? "active" : ""}>
                            {page}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}
