import React, {useState} from 'react';

import {BellIcon, CogIcon} from '@patternfly/react-icons';

import {
    Avatar,
    Brand,
    Button,
    ButtonVariant,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownSeparator,
    KebabToggle,
    PageHeader,
    Toolbar,
    ToolbarGroup,
    ToolbarItem
} from '@patternfly/react-core';

import imgBrand from '../../images/imgBrand.png';
import imgAvatar from '../../images/imgAvatar.svg';

interface Props {
    isNavOpen: boolean,
    onNavToggle: any
}

export const Header = ({isNavOpen, onNavToggle}: Props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false);


    const kebabDropdownItems = [
        <DropdownItem key='1'>
            <BellIcon/> Notifications
        </DropdownItem>,
        <DropdownItem key='2'>
            <CogIcon/> Settings
        </DropdownItem>
    ];

    const userDropdownItems = [
        <DropdownItem key='1'>Link</DropdownItem>,
        <DropdownItem key='2' component='button'>
            Action
        </DropdownItem>,
        <DropdownItem key='3' isDisabled>
            Disabled Link
        </DropdownItem>,
        <DropdownItem key='4' isDisabled component='button'>
            Disabled Action
        </DropdownItem>,
        <DropdownSeparator key='5'/>,
        <DropdownItem key='6'>Separated Link</DropdownItem>,
        <DropdownItem key='7' component='button'>
            Separated Action
        </DropdownItem>
    ];

    const PageToolbar = (
        <Toolbar>
            <ToolbarGroup>
                <ToolbarItem>
                    <Button id='expanded-example-uid-01' aria-label='Notifications actions'
                            variant={ButtonVariant.plain}>
                        <BellIcon/>
                    </Button>
                </ToolbarItem>
                <ToolbarItem>
                    <Button id='expanded-example-uid-02' aria-label='Settings actions'
                            variant={ButtonVariant.plain}>
                        <CogIcon/>
                    </Button>
                </ToolbarItem>
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarItem>
                    <Dropdown
                        isPlain
                        position='right'
                        onSelect={() => setIsKebabDropdownOpen(!isKebabDropdownOpen)}
                        toggle={<KebabToggle onToggle={setIsKebabDropdownOpen}/>}
                        isOpen={isKebabDropdownOpen}
                        dropdownItems={kebabDropdownItems}
                    />
                </ToolbarItem>
                <ToolbarItem>
                    <Dropdown
                        isPlain
                        position='right'
                        onSelect={() => setIsDropdownOpen(!isDropdownOpen)}
                        isOpen={isDropdownOpen}
                        toggle={<DropdownToggle onToggle={setIsDropdownOpen}>ODH User</DropdownToggle>}
                        dropdownItems={userDropdownItems}
                    />
                </ToolbarItem>
            </ToolbarGroup>
        </Toolbar>
    );

    return (
        <PageHeader
            className='header'
            logo={<Brand src={imgBrand} alt='ODH Logo'/>}
            toolbar={PageToolbar}
            avatar={<Avatar src={imgAvatar} alt='Avatar image'/>}
            showNavToggle
            isNavOpen={isNavOpen}
            onNavToggle={onNavToggle}
        />
    );
}
