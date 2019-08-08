import React from "react";
import FieldListGroupItem from './ListGroupItem';


const ListBlock = ({className, list, title}) => (
            
          
                <div className={`block-list ${className}`}>
                    <div className={`card-header bg-dark d-flex ${className}`}>
                        <h6 className={`ac-text-16 font-weight-bold text-white ${className}`}>{title}</h6>
                    </div>

                    <div className={`card-body ${className}`}>
                        <div className={`list-group ${className}`}>
                            {list.map((item, index) => {
                                return (
                                    <div key={index} className={`list-group-item ${className}`}>
                                        <FieldListGroupItem label={item.label} span={item.span} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                
)

export default ListBlock
