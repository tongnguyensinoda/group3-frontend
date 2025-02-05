import React from "react";
import "./Footer.css";

function FooterComponent() {
    return (
        <div className="footer-wrapper">
            <footer>
                <div class="box">
                    <div class="content about">
                        <h2>About us</h2>
                        <ul class="social-icon">
                            <li>
                                <a href="">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="fa fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="content links">
                        <h2>Links</h2>
                        <ul>
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/about">About us</a>
                            </li>   
                        </ul>
                    </div>

                    <div class="content contact">
                        <h2>For more contact</h2>
                        <ul class="info">
                            <li>
                                <span>
                                    <i class="fa fa-map-marker"></i>
                                </span>
                                <span>
                                    3rd Floor - e.town Building 5 - No. 364 Cong Hoa<br />
                                    Ward 13, Tan Binh District, City. Ho Chi Minh
                                    <br />
                                    Vietnam
                                </span>
                            </li>
                            <li>
                                <span>
                                    <i class="fa fa-phone"></i>
                                </span>
                                <span>
                                    84-28-3810 0017
                                </span>
                            </li>

                            {/* <li>
                                <span>
                                    <i class="fa fa-envelope"></i>
                                </span>
                                <span>
                                    <a href="#">lamnguyensinoda@gmail.com</a>
                                </span>
                            </li>

                            <li>
                                <form class="form" style={{ display: "flex", gap: "5px" }}>
                                    <input
                                        type="email"
                                        class="form__field"
                                        placeholder="Subscribe Email"
                                    />
                                    <button
                                        type="button"
                                        class="btn btn--primary  uppercase"
                                        style={{ marginTop: "0px", color: "white" }}
                                    >
                                        Send
                                    </button>
                                </form>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div>
                    <br />
                    <br />
                    <p style={{ color: "white" }}> © 2021 All Right Reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default FooterComponent;
