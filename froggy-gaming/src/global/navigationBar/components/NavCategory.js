import React, { useState } from "react";
import "../styles/dropdown.css";
import { NavCategoryContentData, NavCategoryData } from "./NavCategoryData";

const NavCategory = () => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="category">
        <ul className="category-list">
          {NavCategoryData.length > 0 &&
            NavCategoryData.map((item) => (
              <li key={item.id} className="category-item">
                <span className={`category-link ${selected && "selected"}`}>
                  <span>{item.section}</span>
                  <i className="category-icon fa-solid fa-angle-right"></i>
                </span>
                <ul
                  className="category-menu"
                  onMouseOver={() => setSelected(true)}
                  onMouseLeave={() => setSelected(false)}
                >
                  <>
                    {item.title.map((item) => (
                      <div className="category-grid" key={item.id}>
                        <h4 className="category-name">{item.header}</h4>
                        {item.content.map((item) => (
                          <li key={item.id} className="category-choice">
                            {item.row_content}
                          </li>
                        ))}
                      </div>
                    ))}
                  </>
                  {/* {NavCategoryContentData.map((item) => (
                    <>
                      {item.title.map((item) => (
                        <div key={item.id} className="category-grid">
                          <h4 className="category-name">{item.header}</h4>
                          {item.content.map((item) => (
                            <li className="category-choice">
                              {item.row_content}
                            </li>
                          ))}
                        </div>
                      ))}

                      
                    </>
                  ))} */}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default NavCategory;
