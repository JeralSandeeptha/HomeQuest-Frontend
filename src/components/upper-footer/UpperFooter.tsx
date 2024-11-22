import React, { useEffect, useState } from 'react';
import getSinglePage from '../../services/pages/getSinglePage';
import { Link } from 'react-router-dom';
import './UpperFooter.scss';

const UpperFooter = () => {

    const [page, setPage] = useState<any>({});

    useEffect(() => {
        getSinglePage({
            pageId: 79,
            setPage: setPage
        });
    }, []);

    return (
        <div className='upper-footer'>
            <div className='upper-footer-inner'>
                <h1 className="upper-footer-header">{ page.upper_footer_title }</h1>
                <h1 className="upper-footer-subheader">{ page.upper_footer_desciption }</h1>
                {
                    page.upper_footer_button_url && (
                        <Link to={`${page.upper_footer_button_url}`}>
                            <button className="upper-footer-btn">{ page.upper_footer_button_text }</button>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default UpperFooter;
