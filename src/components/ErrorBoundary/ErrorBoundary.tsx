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
    console.log('ststs', this.state.hasError);
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Text>
            🤖: Oops! It looks like something happened <br />
            Reason: {JSON.stringify(this.state.error)}
          </Text>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </Wrapper>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary