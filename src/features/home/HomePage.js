import { Header, Header_MB, SideBar } from 'components/Common';
import React, { useRef, useState } from 'react';
import { isXM, isXS } from 'utils/mediaResponse';
import './HomePage.scss';
import Image from 'components/Image/Images';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Suggest from './components/Suggest';
import { Link } from 'react-router-dom';
import { FaRegCommentAlt } from 'react-icons/fa';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { LuSmile } from 'react-icons/lu';
import { BsShare } from 'react-icons/bs';
import ShowMoreText from 'react-show-more-text';
import Picker from '@emoji-mart/react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import data from '@emoji-mart/data';

function HomePage() {
    const ref = useRef(null);

    const [inputValue, setInputValue] = useState('');
    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const [showBtnPost, setShowBtnPost] = useState(false);
    const [likeState, setLikeState] = useState(false);

    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);

        React.useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleWindowResize);
            return () =>
                window.removeEventListener('resize', handleWindowResize);
        }, []);

        return { width };
    };

    const viewPort = useViewport();
    const x = window.location.pathname;

    const listAccount = [
        {
            id: 1,
            avatar: 'https://thumbs.dreamstime.com/b/old-railway-train-tunnel-love-autumn-time-orange-background-imaga-fall-backpacker-down-path-170866985.jpg',
            username: 'july.house',
            uploads: [
                {
                    id: 11,
                    src: 'https://thumbs.dreamstime.com/b/old-railway-train-tunnel-love-autumn-time-orange-background-imaga-fall-backpacker-down-path-170866985.jpg',
                },
                {
                    id: 12,
                    src: 'https://thumbs.dreamstime.com/b/old-railway-train-tunnel-love-autumn-time-orange-background-imaga-fall-train-autumn-nature-170866974.jpg',
                },
            ],
            caption: 'Natural and me',
            date: '22/07/2023',
        },
        {
            id: 2,
            avatar: 'https://thumbs.dreamstime.com/b/old-railway-train-tunnel-love-autumn-time-orange-background-imaga-fall-backpacker-down-path-170866985.jpg',
            username: 'july.house',
            uploads: [
                {
                    id: 21,
                    src: 'https://thumbs.dreamstime.com/b/old-railway-train-tunnel-love-autumn-time-orange-background-imaga-fall-backpacker-down-path-170866985.jpg',
                },
                {
                    id: 22,
                    src: 'https://thumbs.dreamstime.com/b/old-railway-train-tunnel-love-autumn-time-orange-background-imaga-fall-train-autumn-nature-170866974.jpg',
                },
            ],
            caption:
                'Track your progress with the free "My Learning" program here at W3Schools.Log in to your account, and start earning points!This is an optional feature. You can study W3Schools without using My Learning rack your progress with the free "My Learning" program here at W3Schools.Log in to your account, and start earning points!This is an optional feature. You can study W3Schools without using My Learning.',
            date: '22/07/2023',
        },
        {
            id: 3,
            avatar: 'https://previews.123rf.com/images/koufax73/koufax731506/koufax73150600053/41047910-small-beach-in-the-woods-hdr-horizontal-imaga.jpg',
            username: 'minhquang',
            uploads: [
                {
                    id: 31,
                    src: 'https://previews.123rf.com/images/koufax73/koufax731506/koufax73150600053/41047910-small-beach-in-the-woods-hdr-horizontal-imaga.jpg',
                },
                {
                    id: 32,
                    src: 'https://thumbs.dreamstime.com/b/old-railway-train-tunnel-love-autumn-time-orange-background-imaga-fall-train-autumn-nature-170866974.jpg',
                },
                {
                    id: 33,
                    src: 'https://www.syramay.com/wp-content/uploads/2021/06/Cabacungan-Allen-Northen-Samar-1024x768.jpg',
                },
            ],
            caption: 'Natural and me',
            date: '25/07/2023',
        },
        {
            id: 4,
            avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            username: 'minhquang',
            uploads: [
                {
                    id: 41,
                    src: 'https://previews.123rf.com/images/koufax73/koufax731506/koufax73150600053/41047910-small-beach-in-the-woods-hdr-horizontal-imaga.jpg',
                },
            ],
            caption: 'Natural and me',
            date: '24/07/2023',
        },
    ];

    const handleKeyDown = (e) => {
        if (e.code === 'Enter') e.preventDefault();
    };
    const handClickBtnCmt = (index) => {
        // for (let i = 1; i <= listAccount.length; i++) {
        // if (
        //     listAccount.find((el) => {

        //         return el.id === index;
        //     })
        // ) {
        // ref.current.focus();
        // }
        // }

        console.log('index: ', index);
        const temp = listAccount.find((el) => {
            console.log('id: ', el.id);
            return el.id === index;
        });

        // console.log(temp);
    };
    const handleClickLike = () => {
        setLikeState(true);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (e.target.value.trim().length === 0) setShowBtnPost(false);
        else setShowBtnPost(true);
    };

    return (
        <div className="root">
            <div className="sidebar-wapper">
                <SideBar />
            </div>
            <div className="children-wrapper">
                {viewPort.width <= isXM && x.includes('profile') === false ? (
                    viewPort.width > isXS ? (
                        <div className="children-wrapper__header">
                            <Header />
                        </div>
                    ) : x.includes('search') === false ? (
                        <div className="chilren-wrapper__header-mb">
                            <Header_MB />
                        </div>
                    ) : (
                        ''
                    )
                ) : (
                    ''
                )}
                <div className="home-body">
                    <ul className="list-hb">
                        {listAccount?.map((item, index) => (
                            <li className="item-hb" key={item.id}>
                                <div className="item-hb__header">
                                    <div className="item-left__header">
                                        <Image
                                            src={item.avatar}
                                            alt="avatar"
                                            className="left__avt"
                                        />
                                        <Link to="#" className="left__username">
                                            {item.username}
                                        </Link>
                                        <p className="left__date">
                                            {item.date}
                                        </p>
                                    </div>

                                    <div className="item-right__header">
                                        <MoreHorizIcon className="right__icon-more" />
                                    </div>
                                </div>
                                <div className="item-hb__list-image">
                                    <Image
                                        src={item.uploads[0].src}
                                        alt="picture"
                                        className="image"
                                    />
                                </div>
                                <div className="item-hb__contact">
                                    <div className="contact__row-1">
                                        {likeState ? (
                                            <FavoriteOutlinedIcon
                                                className="active-heart"
                                                onClick={() =>
                                                    setLikeState(false)
                                                }
                                            />
                                        ) : (
                                            <FavoriteBorderIcon
                                                className="row-1__icon none-active-heart"
                                                onClick={handleClickLike}
                                            />
                                        )}

                                        <FaRegCommentAlt
                                            className="row-1__icon"
                                            onClick={() =>
                                                handClickBtnCmt(index)
                                            }
                                        />
                                        <BsShare className="row-1__icon" />
                                    </div>
                                    <div className="contact__likes">14.000</div>
                                    <div className="contact__row-2">
                                        <ShowMoreText
                                            lines={2}
                                            more="Show more"
                                            less="Show less"
                                            className="content__text"
                                            anchorClass="show-more-less-clickable"
                                            expanded={false}
                                            truncatedEndingComponent={'...'}
                                        >
                                            <Link className="row-2__un">
                                                {item.username}
                                            </Link>
                                            {item.caption}
                                        </ShowMoreText>
                                    </div>
                                    <div className="contact__row-3">
                                        <textarea
                                            value={inputValue}
                                            ref={ref}
                                            onKeyDown={(e) => handleKeyDown(e)}
                                            onClick={() =>
                                                setIsPickerVisible(false)
                                            }
                                            type="text"
                                            placeholder="Add your comment"
                                            className="row-3__input"
                                            onChange={(e) =>
                                                handleInputChange(e)
                                            }
                                        />
                                        <div className="row-3__comment">
                                            <LuSmile
                                                className="row-3__smile-icon"
                                                onClick={() =>
                                                    setIsPickerVisible(
                                                        !isPickerVisible,
                                                    )
                                                }
                                            />
                                            <div
                                                className={
                                                    isPickerVisible
                                                        ? 'd-block picker-wrap'
                                                        : 'd-none picker-wrap'
                                                }
                                            >
                                                <Picker
                                                    className="picker"
                                                    data={data}
                                                    previewPosition="none"
                                                    onEmojiSelect={(e) => {
                                                        // setShowBtnPost(true);
                                                        if (inputValue)
                                                            setInputValue(
                                                                inputValue.concat(
                                                                    e.native,
                                                                ),
                                                            );
                                                        else {
                                                            setInputValue(
                                                                e.native.concat(
                                                                    inputValue,
                                                                ),
                                                            );
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <SendOutlinedIcon className="row-3__send-icon" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="suggesst-children">
                        <Suggest />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
