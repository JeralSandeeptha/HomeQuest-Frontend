import { useEffect, useState } from 'react';
import './NotfoundContent.scss';
import getSinglePage from '../../services/pages/getSinglePage';
import notfoundImage from '../../assets/images/notfound.png';
import { Link } from 'react-router-dom';

const NotfoundContent = () => {

    const [page, setPage] = useState<any>({});

    useEffect(() => {
        getSinglePage({
            pageId: 66,
            setPage: setPage
        });
    }, []);

    return (
    <div className='notfound-content'>
      <div className="notfound-content-inner">
        <div className="notfound-content-left">
            <img src={notfoundImage} alt="notfound-image" className="notfound-image" />
        </div>
        <div className="notfound-content-right">
            <h1 className="notfound-header">{ page?.error_page_header }</h1>
            <h5 className="notfound-subheader">{ page?.error_page_sub_header }</h5>
            {
                page.error_page_button_text && (
                    <Link to={`${page.error_page_button_url}`}>
                        <button className="notfound-btn">
                            <h5 className="btn-text">{ page.error_page_button_text }</h5>
                            <img src="https://cdn.prod.website-files.com/66f262050f96e0f9e1e4568c/670a14775d3f9186aa0ffeb2_arrow%20(2).svg" alt="arrow-logo" className="arrow" />
                        </button>
                    </Link>
                )
            }
        </div>
      </div>
    </div>
  )
}

export default NotfoundContent
