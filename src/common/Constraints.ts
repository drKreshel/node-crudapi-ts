import { DataType } from 'sequelize-typescript';

export const NUMBER_TYPES: any[] = [
    DataType.TINYINT,
    DataType.SMALLINT,
    DataType.REAL,
    DataType.NUMERIC,
    DataType.NUMBER,
    DataType.MEDIUMINT,
    DataType.INTEGER,
    DataType.FLOAT,
    DataType.DOUBLE,
    DataType.DECIMAL,
    DataType.BIGINT
]


export const HTTP_STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
}