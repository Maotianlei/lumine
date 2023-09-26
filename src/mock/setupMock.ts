/** @format */
type configType = {
    mock?: boolean;
    setup: () => void;
};

export default function setupMock(config: configType) {
    const { mock = process.env.NODE_ENV === 'development', setup } = config;
    if (mock === false) return;
    setup();
}
