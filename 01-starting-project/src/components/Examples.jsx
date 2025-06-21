import TabButton from "./TabButton.jsx";
import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import Section from "./Section.jsx"
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [selectedTopic, setTopic] = useState();

    function handleSelect(selectedButton) {
        //selectedButton => 'components', 'jsx', 'props', 'state'
        console.log("Hello World! - selected");
        console.log(selectedButton);
        setTopic(selectedButton);
    }

    function tabContent() {
        return (
            <>
                {!selectedTopic ? <p id="tab-content">Please Select a Topic</p> : null}
                {selectedTopic ?
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <h3>{EXAMPLES[selectedTopic].description}</h3>
                    <pre>
                    <h3>{EXAMPLES[selectedTopic].code}</h3>
                    </pre>
                </div> : null}
            </>
        );
    }
    return (
        <>
            <Section title="Examples" id="examples">
                
                <Tabs 
                    buttonsContainer={"menu"}
                    buttons={
                    <>
                        <TabButton onClick={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>
                        Components
                        </TabButton>
                        <TabButton onClick={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>
                        JSX
                        </TabButton>
                        <TabButton onClick={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>
                        Props
                        </TabButton>
                        <TabButton onClick={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>
                        State
                        </TabButton> 
                    </>
                }>
                {tabContent()}
                </Tabs>
            </Section>        
        </>
    );
}