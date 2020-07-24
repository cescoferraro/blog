/* eslint-disable */
import React, { Component } from "react"
import i18next from "./config"
import { I18nextProvider, withTranslation } from "react-i18next"

export function withTrans(WrappedComponent) {
  WrappedComponent = withTranslation()(WrappedComponent)

  return class extends Component<any, any> {
    render() {
      return (
        <I18nextProvider i18n={i18next}>
          <WrappedComponent {...this.props} language={i18next.language} />
        </I18nextProvider>
      )
    }
  }
}