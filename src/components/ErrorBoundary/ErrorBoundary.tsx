import { Component, ErrorInfo, ReactNode } from "react"
import { Text } from "../Table/Pagination/Pagination.styled";
import { Wrapper } from "../Main";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { hasError: false, error: undefined }
  }
  static getDerivedStateFromError(_: Error) {

    return { hasError: true }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ margin: '96px auto', textAlign: 'center' }}>
          <div style={{ fontSize: '32px' }}>
            🤖: Oops! Something went wrong <br />
            Reason: {this.state.error?.toString()}
          </div>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            style={{ padding: '12px 16px', fontFamily: 'Plus Jakarta Sans', marginTop: '16px' }}
          >
            Try again?
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary