export interface WeatherForecastResponse {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number]
  },
  properties: {
    meta: {
      updated_at: Date,
      units: {
        air_pressure_at_sea_level: string;
        air_temperature: string;
        air_temperature_max: string;
        air_temperature_min: string;
        cloud_area_fraction: string;
        cloud_area_fraction_high: string;
        cloud_area_fraction_low: string;
        cloud_area_fraction_medium: string;
        dew_point_temperature: string;
        fog_area_fraction: string;
        precipitation_amount: string;
        precipitation_amount_max: string;
        precipitation_amount_min: string;
        probability_of_precipitation: string;
        probability_of_thunder: string;
        relative_humidity: string;
        ultraviolet_index_clear_sky: number;
        wind_from_direction: string;
        wind_speed: string;
        wind_speed_of_gust: string;
      }
    },
    timeseries: Array<TimeSeries>
  }
}

export interface TimeSeries {
  time: Date;
  data: {
    instant: {
      details: {
        air_pressure_at_sea_level: number;
        air_temperature: number;
        cloud_area_fraction: number;
        relative_humidity: number;
        wind_from_direction: number;
        wind_speed: number;
      }
    },
    next_12_hours: {
      summary: {
        symbol_code: string;
      }
    },
    next_1_hours: {
      summary: {
        symbol_code: string;
      },
      details: {
        precipitation_amount: number;
      }
    },
    next_6_hours: {
      summary: {
        symbol_code: string;
      },
      details: {
        precipitation_amount: number;
      }
    }
  }
}

export interface WeatherLegend {
  [name: string]:
  {
    desc_en: string;
    desc_nb: string;
    desc_nn: string;
    old_id: string;
    variants: Array<string>
  }
}