import React, { ReactElement } from "react";
import { Form, InputNumber, Typography } from "antd";
import HelpIcon from "../help/HelpIcon";

export default function TrainOnlySpeakerEmbedsUntilInput({
  disabled,
  name,
  rules,
}: {
  disabled: boolean;
  name: string;
  rules: any[];
}): ReactElement {
  return (
    <Form.Item
      rules={rules}
      label={
        <Typography.Text>
          Run Validation Every
          <HelpIcon
            content={
              <Typography>
                How many steps to take before calculating the validation losses
                on the validation dataset. A higher value means less time spend
                on training but will also make it harder to measure the level of
                overfitting.
              </Typography>
            }
            style={{ marginLeft: 8 }}
          />
        </Typography.Text>
      }
      name={name}
    >
      <InputNumber disabled={disabled} step={1} min={0} />
    </Form.Item>
  );
}

TrainOnlySpeakerEmbedsUntilInput.defaultProps = {
  disabled: false,
  rules: [],
};
