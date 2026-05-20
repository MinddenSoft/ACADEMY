import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-neutral-50 dark:bg-dark-900 flex items-center justify-center p-8">
          <div className="max-w-lg text-center">
            <h2 className="font-display font-bold text-2xl text-red-600 mb-4">Error al cargar la página</h2>
            <pre className="text-sm text-left bg-red-50 dark:bg-red-900/20 p-4 rounded-xl overflow-auto max-h-60 border border-red-200 dark:border-red-800">
              {this.state.error.message}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors"
            >
              Recargar página
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
