import React, { Component, PropTypes } from 'react';
import {
    TrapApiError,
    Widget,
    WidgetHeader,
    WidgetBody,
    WidgetStatusBadge,
    WidgetLabel,
} from 'mozaik/ui'


//export default React.createClass(

class Data extends Component {

    static getApiRequest({ url, headers }) {
        return {
            id:     `json.data`,
            params: { url, headers },
        }
    }

    // getApiRequest() {
    //     return {
    //       id: 'json.data',
    //       params: {
    //         title: this.props.title,
    //         value: this.props.value,
    //         unit: this.props.unit,
    //         alter: this.props.alter
    //       }
    //     };
    // }

    render() {
        const { apiData = {}, apiError, title="unknown", unit = null } = this.props;
        let value = apiData.response || this.props.value;

        if (value && this.props.alter) {
          let alter = eval("(" + this.props.alter + ")");
          value = alter(value);
        }

        value || (value = "unknown")

        return (
            <Widget>
                <WidgetHeader
                    title={title || 'Events'}
                    icon="code-fork"
                />
                <WidgetBody>
                    <TrapApiError error={apiError}>
                        <WidgetLabel
                            label={unit}
                            prefix={value}
                            style={{
                                padding:   '2vmin',
                                textAlign: 'center',
                            }}
                        />
                    </TrapApiError>
                </WidgetBody>
            </Widget>
        );
    }
}

Data.displayName = 'Data';

Data.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number,
    unit:  PropTypes.string
};

Data.defaultProps = {
    title: 'Mozaïk JSON widget',
    value: 0,
    unit:  ''
};

export { Data as default };
