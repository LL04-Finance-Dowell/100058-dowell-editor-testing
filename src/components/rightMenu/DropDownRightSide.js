import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useStateContext } from "../../contexts/contextProvider";

const DropDownRightSide = () => {
  const {
    dropdownName,
    setDropdownName,
    dropdownLabel,
    setDropdownLabel,
    dropdownItems,
    setDropdownItems,
    dropdownOptions,
    setDropdownOptions,
    rightSideDropDown,
    setRightSideDropDown,
  } = useStateContext();

  const dropdownField = document.querySelector(".focussed");
  if (dropdownField) {
    //console.log(dropdownField.firstElementChild);
    //console.log(dropdownField.lastElementChild);
  }

  // Dropdown Name

  const dropdownNameField = dropdownField?.firstElementChild
  if (dropdownNameField !== null && rightSideDropDown) {
    dropdownNameField.innerHTML = `${dropdownName}`;
  }



  function handleNameChange(e) {
    setDropdownName(e.target.value);
  }

  // Dropdown Items

  useEffect(() => {

    const selectionn = dropdownField?.lastElementChild
    if (rightSideDropDown && selectionn !== null) {
      var options = document.createElement("option");
      for (const [index, a] of dropdownOptions.entries()) {
        options.value = index;
        options.innerHTML = a;
      }
      selectionn.appendChild(options);
    }
  }, [dropdownOptions]);

  function handleItemsChange(e) {
    setDropdownItems(e.target.value);
  }

  const addOptions = () => {
    if (dropdownItems !== "") {
      setDropdownOptions([...dropdownOptions, [dropdownItems]]);
    }
    setDropdownItems("");
    setRightSideDropDown(true);
  };

  function removeDropdown() {
    document.querySelector(".focussedd").remove();
    // const focusseddElmnt = document.querySelector(".focussedd");
    // if (focusseddElmnt.classList.contains("holderDIV")) {
    //   document.querySelector(".focussedd").remove();
    // }
  }

  return (
    <div>
      <h3>Dropdown Settings</h3>
      <Form.Label className="text-secondary">Dropdown Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Name"
        className="shadow border p-2 bg-color mb-3"
        onChange={handleNameChange}
      />
      <Form.Label className="text-secondary">Label</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Label"
        className="shadow border p-2 bg-color mb-3"
        onChange={handleNameChange}
      />

      <Form.Label className="text-secondary">List Items</Form.Label>
      <Form.Control
        type="text"
        placeholder="Add List Items"
        className="shadow border p-2 bg-color mb-3"
        value={dropdownItems}
        onChange={handleItemsChange}
      />
      <Button
        variant="primary"
        className="mt-2 mb-5 w-100"
        onClick={addOptions}
      >
        +
      </Button>
      <hr />
      {/* <div className='dropdown '>
        <h6>User permissions</h6>
        <select className='shadow bg-white rounded w-100 h-75'>
          <option value="Nothing Selected" selected="selected">Nothing Selected</option>
          <option value="Action">Action</option>
          <option value="Another action">Another action</option>
          <option value="Something else">Something else</option>
        </select>
      </div> */}

      <div />

      <div className="pt-3 mb-4">
        <div className='dropdown'>
          <h6>Grouped Elements</h6>
          <select className='shadow bg-white p-3 text-secondary rounded w-100 h-100 border-0 rounded select'>
            <option value="Nothing Selected" selected="selected">Nothing Selected</option>
            <option value="Action">Action</option>
            <option value="Another action">Another action</option>
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      <div className="pt-0">
        <div className='dropdown'>
          <h6>User Permissions</h6>
          <select className='shadow bg-white text-secondary p-3 rounded w-100 h-100 border-0 select'>
            <option value="Nothing Selected" selected="selected">Nothing Selected</option>
            <option value="Action">Anjanas</option>
            <option value="Another action">Manish</option>
            <option value="Something else">Thomas</option>
          </select>
        </div>
      </div>
      <div className="text-center">
        <Button onClick={removeDropdown} variant="primary" className="mt-3">
          Remove Dropdown
        </Button>
      </div>
    </div>
  );
};

export default DropDownRightSide;
