import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

const Style = styled.div`
    h5 {
        font-weight: 400 !important;
        font-size: 18px !important;
    }
`;

export const TopNav = ({
    TextComp,
    DropDownText,
    DropDownArray,
    RightComp,
    TopNavClassName,
    timePeriodSelection,
    changeTimePeriod,
    cardIdx
}) => {
    function handleChangeTimePeriod(e, newVal) {
        e.preventDefault();

        let cloneTimePeriodSelection = [...timePeriodSelection];
        cloneTimePeriodSelection[cardIdx] = newVal;

        changeTimePeriod(cloneTimePeriodSelection);
    }

    return (
        <Style>
            <div
                className={`d-flex flex-wrap justify-content-between align-items-center ${TopNavClassName}`}
            >
                <span className="text-muted font-weight-normal">
                    {TextComp}
                </span>
                <div>
                    {RightComp && RightComp}
                    {DropDownText && (
                        <Dropdown>
                            <Dropdown.Toggle className="dropdown-6 text-black border text-muted">
                                {DropDownText}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    href="#/action-1"
                                    onClick={(e) =>
                                        handleChangeTimePeriod(e, "Month")
                                    }
                                >
                                    Month
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#/action-2"
                                    onClick={(e) =>
                                        handleChangeTimePeriod(e, "Week")
                                    }
                                >
                                    Week
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#/action-3"
                                    onClick={(e) =>
                                        handleChangeTimePeriod(e, "Yesterday")
                                    }
                                >
                                    Yesterday
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </div>
            </div>
        </Style>
    );
};
