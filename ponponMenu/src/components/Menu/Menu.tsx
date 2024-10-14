import { useState } from "react";
import { ButtonGroup, Whisper, Popover, Dropdown, IconButton } from "rsuite";
import "./Menu.scss";
import { FontIcon } from "components/FontIcon/FontIcon";

export function Menu({
  options,
}: {
  options: { label: string; onClick: () => void }[];
}) {
  return (
    <ButtonGroup className="app-menu">
      <Whisper
        placement="topEnd"
        trigger="click"
        speaker={({ onClose, left, top, className }, ref) => {
          const handleSelect = () => {
            onClose();
          };

          return (
            <Popover
              ref={ref}
              className={`app-menu-popover ${className}`}
              style={{ left, top }}
              full
            >
              <Dropdown.Menu
                className="app-menu-dropdown"
                onSelect={handleSelect}
              >
                {options.map((item, index) => (
                  <Dropdown.Item
                    key={index}
                    eventKey={index}
                    onClick={() => {
                      item.onClick();
                      onClose();
                    }}
                  >
                    {item.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Popover>
          );
        }}
      >
        <IconButton
          icon={<FontIcon icon="bars" color="white" />}
          circle
          style={{
            backgroundColor: "#4a4a4a",
            position: "fixed",
            right: 30,
            bottom: 30,
            width: 40,
            height: 40,
            borderRadius: 10,
          }}
        />
      </Whisper>
    </ButtonGroup>
  );
}
