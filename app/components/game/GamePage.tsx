import { useRef, useState } from 'react'
import styles from './GamePage.module.scss'
import cn from "classnames"

export const GamePage = () => {
    const [showAll, setShowAll] = useState(false)

    return (
        <div className="container">
            <div className={styles.gamePage}>
                <div className={styles.gamePage__content}>
                    <h3 className={styles.gamePage__content_title}>Crimson Spires</h3>
                    <iframe className={styles.gamePage__content_video} width="700" height="406" src="https://www.youtube.com/embed/USIRigbVByw" title="Book of Demons | Review in 2 Minutes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <p className={styles.gamePage__content_text}>This otome-style visual novel blends eeriness and romance into a compelling drama. A ring of deadly towers traps you in the small mining town of Bataille, Missouri with extreme conspiracy theorists, a serial killer, and wealthy vampires. Choose your partner wisely.</p>
                    <div className={styles.gamePage__content_columns}>
                        <div className={styles.gamePage__content_column}>
                            <h3>Genres</h3>
                            <div className={styles.gamePage__content_column_list}>
                                <p>Adventure</p>
                                <p>Fantasy</p>
                                <p>Indie</p>
                            </div>
                        </div>
                        <div className={styles.gamePage__content_column}>
                            <h3>Features</h3>
                            <div className={styles.gamePage__content_column_list}>
                                <p>Controller Support</p>
                                <p>Single Player</p>
                            </div>
                        </div>
                    </div>
                    <div style={{height: showAll ? 'auto' : '150px', overflow: 'hidden'}} className={styles.gamePage__content_dopInfo}>
                        <p className={styles.gamePage__content_description}>TRAPPED IN A SMALL TOWN
The small mining town of Bataille, Missouri has been cordoned off from the outside world for six months. The inhabitants have no idea why. All they know is that ever since the so-called "Contingency," planes no longer fly overhead, strange creatures have been glimpsed beyond the perimeter, and large mechanical towers will gun down anyone who tries to escape. As you--Sheriff Erika Wright--search for the truth, you must listen to the advice of a serial killer, mingle with extreme conspiracy theorists, and negotiate with vampires.
Your struggle to protect the people of Bataille will uncover startling secrets and forge unlikely alliances. Eventually, you must choose a partner in your quest to unveil the mysteries around you.
FIND LOVE IN PARTNERSHIP
Amidst the horrors facing Bataille, romance can blossom with the partner in whom you trust. This epic story contains four distinct story branches with Julian, Maddy, Liam, or August. Each branch reveals unique secrets about the mysteries of the towers and a chance to find love.
Unlock four distinct romances and story paths in an epic script totalling 250,000+ words
Hear select scenes with a rich cast of English voice actors
Experience the environment of Bataille in 3D
Explore select 3D interiors
Listen to a lengthy, dynamic soundtrack by developer and composer Jenny Gibbons</p>
                        <div className={styles.gamePage__content_dopInfo}>
                            <img src="/game_infoImg_1.avif" alt="" />
                            <img src="/game_infoImg_2.avif" alt="" />
                            <img src="/game_infoImg_3.avif" alt="" />
                            <img src="/game_infoImg_4.avif" alt="" />
                            <img src="/game_infoImg_5.avif" alt="" />
                        </div>
                    </div>
                    <div onClick={() => setShowAll(!showAll)} className={cn(styles.gamePage__content_hideDesck, showAll === true ? styles.gamePage__content_hideDesck_active : '')}><p className={styles.gamePage__content_hideDesck_active_p}>{showAll === true ? 'show less' : 'show more'}</p></div>
                    <h3 className={styles.gamePage__content_specifications_title}>Specifications</h3>
                    <div className={styles.gamePage__content_specifications}>
                        <div className={styles.specifications__categories}>
                            <button className={styles.specifications__categories_category}>Windows</button>
                            <button className={styles.specifications__categories_category}>Mac Os</button>
                        </div>
                        <div id='Windows' className={styles.specification}>
                            <div className={styles.specification_columns}>
                                <div className={styles.specification_column}>
                                    <h3 className={styles.specification_column_title}>Minimum</h3>
                                    <div className={styles.specification_column_box}>
                                        <h3>OS version</h3>
                                        <p>Microsoft Windows 7</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>CPU</h3>
                                        <p>Intel Core 2 Quad Q8200 2.33GHz</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>Memory</h3>
                                        <p>4 GB</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>GPU</h3>
                                        <p>AMD 7500 or NVIDIA GT 555M video card</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>DirectX</h3>
                                        <p>DirectX 9</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>Storage</h3>
                                        <p>1GB</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>SoundCard</h3>
                                        <p>DirectX 9.0c compatible</p>
                                    </div>
                                </div>
                                <div className={styles.specification_column}>
                                    <h3 className={styles.specification_column_title}>Recommended</h3>
                                    <div className={styles.specification_column_box}>
                                        <h3>OS version</h3>
                                        <p>Microsoft Windows 10</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>CPU</h3>
                                        <p>1.7 GHz Dual Core or Greater</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>Memory</h3>
                                        <p>4 GB RAM</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>GPU</h3>
                                        <p>512 MB DirectX 9.0c compatible graphics card or better</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>Storage</h3>
                                        <p>1GB</p>
                                    </div>
                                    <div className={styles.specification_column_box}>
                                        <h3>SoundCard</h3>
                                        <p>DirectX 9.0c compatible or better</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.specification_column_box}>
                                <h3>Languages Supported</h3>
                                <p>Audio: English</p>
                                <p>Text: English</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sitebar}>
                    <img className={styles.sitebar_image} src="https://cdn1.epicgames.com/spt-assets/c16e7bcfe3a64579916dc554d74db65a/book-of-demons-logo-1ghgk.png?h=270&quality=medium&resize=1&w=480" alt="" />
                    <h3 className={styles.sitebar_price}>pln 89</h3>
                    <button className={styles.sitebar_buy}>Buy now</button>
                    <button className={styles.sitebar_add}>add to cart</button>
                    <div className={styles.sitebar_info}>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Refund Type</p>
                            <p className={styles.sitebar_info_line_inf}>Self-Refundable</p>
                        </div>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Developer</p>
                            <p className={styles.sitebar_info_line_inf}>Thing Trunk</p>
                        </div>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Publisher</p>
                            <p className={styles.sitebar_info_line_inf}>Thing Trunk</p>
                        </div>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Release Date</p>
                            <p className={styles.sitebar_info_line_inf}>04/04/23</p>
                        </div>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Initial Release</p>
                            <p className={styles.sitebar_info_line_inf}>12/14/18</p>
                        </div>
                        <div className={styles.sitebar_info_line}>
                            <p className={styles.sitebar_info_line_title}>Platform</p>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}